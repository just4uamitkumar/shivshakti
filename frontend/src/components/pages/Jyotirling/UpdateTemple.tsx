import Grid from "@mui/material/Grid2";
import TypoGraphy from "../../common/Typography";
import { Drawer, Stack, TextField } from "@mui/material";
import "./style.scss";
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import { templeType } from "./constants";
import { server } from "../../../redux/store";
import UpdateModal from "./UpdateModal";

interface Props {
  openUpdateTempleDrawer: boolean;
  toggleUpdateTempleDrawer: () => void;
  currentTemple: templeType[];
  openSnack?: boolean;
  setOpenSnack: (openSnack: boolean) => void;
  errorSnack?: boolean;
  setErrorSnack: (openSnack: boolean) => void;
  setErrorVal: (errorVal: string) => void;
}

const UpdateTemple: React.FC<Props> = ({
  openUpdateTempleDrawer,
  toggleUpdateTempleDrawer,
  currentTemple,
  openSnack,
  setOpenSnack,
  errorSnack,
  setErrorSnack,
  setErrorVal,
}) => {
  const [formData, setFormData] = useState<templeType>({
    _id: "",
    name: "",
    state: "",
    description: "",
    imgPath: "",
    latitude: "",
    longitude: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (!currentTemple) {
      return;
    } else {
      setFormData({
        ...formData,
        _id: currentTemple[0]?._id,
        name: currentTemple[0]?.name,
        city: currentTemple[0]?.city,
        state: currentTemple[0]?.state,
        description: currentTemple[0]?.description,
        imgPath: currentTemple[0]?.imgPath,
        latitude: currentTemple[0]?.location?.latitude,
        longitude: currentTemple[0]?.location?.longitude,
      });
    }
  }, [currentTemple]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (!formData.name) {
      setErrorSnack(!errorSnack);
      setErrorVal("Name");

      return;
    }
    if (!formData.state) {
      setErrorVal("State");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.description) {
      setErrorVal("Description");
      setErrorSnack(!errorSnack);
      return;
    }

    if (!formData.imgPath) {
      setErrorVal("Image Path");
      setErrorSnack(!errorSnack);
      return;
    }
    setOpenModal(true);
  };

  const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${server}jyotirlings/${currentTemple[0]?._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          state: formData.state,
          city: formData.city,
          imgPath: formData.imgPath,
          description: formData.description,
          location: {
            latitude: Number(formData.latitude),
            longitude: Number(formData.longitude),
          },
        }),
      });

      if (response.status === 200) {
        closeModal();
        setOpenSnack(!openSnack);
        toggleUpdateTempleDrawer();
      }
    } catch (e) {
      console.dir(e);
      closeModal();
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Drawer
        open={openUpdateTempleDrawer}
        onClose={toggleUpdateTempleDrawer}
        className="drawerA"
        anchor={"right"}
      >
        <Grid size={12} flexDirection={"row"}>
          <Stack>
            <TypoGraphy variant={"h4"}>{"Update Jyotirling"}</TypoGraphy>
          </Stack>
          <Grid className="formWrapper">
            <Stack className="mb-2">
              <TextField
               label="Name"
                variant="outlined"
                value={formData?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="name"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="State"
                variant="outlined"
                value={formData?.state}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="state"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="City"
                variant="outlined"
                value={formData?.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="city"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Image Source"
                variant="outlined"
                value={formData?.imgPath}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="imgPath"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={5}
                value={formData.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="description"
              />
            </Stack>
            <Stack className="mb-2" flexDirection={"row"}>
              <Stack className="mr-1">
                <TextField
                  label="Latitude"
                  variant="outlined"
                  value={formData.latitude === 0 ? null : formData.latitude}
                  onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(el)
                  }
                  name="latitude"
                />
              </Stack>
              <Stack>
                <TextField
                  label="Longitude"
                  variant="outlined"
                  value={formData.longitude === 0 ? null : formData.longitude}
                  onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(el)
                  }
                  name="longitude"
                />
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"flex-end"}>
              <Button
                className={"primary-btn"}
                variant={"contained"}
                text={"Update"}
                onClick={submitHandler}
              />
              <Button
                className={"cancel-btn"}
                variant={"contained"}
                text={"Cancel"}
                onClick={toggleUpdateTempleDrawer}
              />
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
      <UpdateModal
        openModal={openModal}
        handleUpdate={handleUpdate}
        closeModal={closeModal}
      />
    </>
  );
};

export default UpdateTemple;
