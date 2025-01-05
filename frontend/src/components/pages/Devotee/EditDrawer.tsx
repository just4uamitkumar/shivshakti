import Grid from "@mui/material/Grid2";
import TypoGraphy from "../../common/Typography";
import { Drawer, Stack, TextField } from "@mui/material";
import "./style.scss";
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import { devoteeType } from "./constants";
import { useAppDispatch } from "../../../redux/store";
import {
  getDevotees,
  updateDevotee,
} from "../../../features/devoteeReducer/action";
import EditModal from "./EditModal";

interface Props {
  isEditDrawer: boolean;
  setIsEditDrawer: (isEditDrawer: boolean) => void;
  toggleEditDrawer: () => void;
  editSnack?: boolean;
  setEditSnack: (openSnack: boolean) => void;
  errorSnack?: boolean;
  setErrorSnack: (errorSnack: boolean) => void;
  setErrorVal: (errorVal: string) => void;
  selectedRecord?: devoteeType;
}

const EditDrawer: React.FC<Props> = ({
  isEditDrawer,
  setIsEditDrawer,
  toggleEditDrawer,
  editSnack,
  setEditSnack,
  setErrorSnack,
  errorSnack,
  setErrorVal,
  selectedRecord,
}) => {
  const [formData, setFormData] = useState<devoteeType>({
    _id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    birthDate: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    hobbies: "",
    comments: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedRecord) {
      setFormData({
        ...formData,
        _id: selectedRecord?._id,
        firstName: selectedRecord?.firstName,
        middleName: selectedRecord?.middleName,
        lastName: selectedRecord?.lastName,
        mobile: selectedRecord?.mobile,
        birthDate: selectedRecord?.birthDate,
        country: selectedRecord?.country,
        state: selectedRecord?.state,
        city: selectedRecord?.city,
        zipCode: selectedRecord?.zipCode,
        hobbies: selectedRecord?.hobbies,
        comments: selectedRecord?.comments,
      });
    }
  }, [selectedRecord]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    if (!formData.firstName) {
      setErrorSnack(!errorSnack);
      setErrorVal("First Name");
      return;
    }
    if (!formData.lastName) {
      setErrorSnack(!errorSnack);
      setErrorVal("Last Name");
      return;
    }
    if (!formData.country) {
      setErrorVal("Country");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.state) {
      setErrorVal("State");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.city) {
      setErrorVal("city");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.mobile) {
      setErrorVal("Mobile");
      setErrorSnack(!errorSnack);
      return;
    }

    closeModal();
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(updateDevotee(formData))
      .then(() => {
        closeModal();
        setEditSnack(!editSnack);
        toggleEditDrawer();
      })
      .then(() => {
        dispatch(getDevotees());
      })
      .catch((error) => {
        console.dir(error);
        closeModal();
      });
  };

  return (
    <>
      <Drawer
        open={isEditDrawer}
        onClose={toggleEditDrawer}
        className="drawerA"
        anchor={"right"}
      >
        <Grid size={12} flexDirection={"row"}>
          <Stack>
            <TypoGraphy variant={"h4"}>{"Edit Devotee"}</TypoGraphy>
          </Stack>
          <Grid className="formWrapper">
            <Stack className="mb-2">
              <TextField
                label="Fist Name"
                variant="outlined"
                value={formData.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="firstName"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Middle Name"
                variant="outlined"
                value={formData.middleName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="middleName"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="lastName"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Mobile"
                variant="outlined"
                value={formData.mobile}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="mobile"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Birth Date"
                variant="outlined"
                value={formData.birthDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="birthDate"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Country"
                variant="outlined"
                value={formData.country}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="country"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="State"
                variant="outlined"
                value={formData.state}
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
                value={formData.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="city"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Zip Code"
                variant="outlined"
                value={formData.zipCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="zipCode"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Qualification"
                variant="outlined"
                value={formData.qualification}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="qualifiation"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Hobbies"
                variant="outlined"
                value={formData.hobbies}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="hobbies"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Comments"
                variant="outlined"
                multiline
                rows={5}
                value={formData.comments}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="comments"
              />
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
                onClick={() => setIsEditDrawer(false)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
      <EditModal
        closeModal={closeModal}
        openModal={openModal}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default EditDrawer;
