import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import { server } from "../../../redux/store";
import { Alert, Snackbar, Stack, Grid } from "@mui/material";
import Button from "../../common/Button";
import TypoGraphy from "../../common/Typography";
import { templeType } from "./constants";
import AddTemple from "./AddTemple";
import { Delete, Edit, TaskAlt, Warning } from "@mui/icons-material";
import CustomIconBtn from "../../common/IconBtn";
import DeleteModal from "./DeleteModal";
import UpdateTemple from "./UpdateTemple";

const Jyotirlinga: React.FC = () => {
  const [templeList, setTempleList] = useState<[]>([]);
  const [openAddTempleDrawer, setOpenAddTempleDrawer] =
    useState<boolean>(false);
  const [openUpdateTempleDrawer, setOpenUpdateTempleDrawer] =
    useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [addSnack, setAddSnack] = useState<boolean>(false);
  const [updateSnack, setUpdateSnack] = useState<boolean>(false);
  const [deleteSnack, setDeleteSnack] = useState<boolean>(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");
  const [selectedTempleId, setSelectedTempleId] = useState<string>("");
  const [currentTemple, setCurrentTemple] = useState<templeType[]>([]);

  useEffect(() => {
    getJyotirling();
  }, []);

  useEffect(() => {
    getJyotirling();
  }, [addSnack, updateSnack]);

  useEffect(() => {
    const currentItem: never[] = templeList.filter(
      (item: templeType) => item?._id === selectedTempleId
    );
    setCurrentTemple(currentItem);
  }, [selectedTempleId]);

  const handleAddSnackClose = () => {
    setAddSnack(false);
  };

  const handleUpdateSnackClose = () => {
    setAddSnack(false);
  };

  const handleDeleteSnackClose = () => {
    setDeleteSnack(false);
  };

  const handleSnackErrorClose = () => {
    setErrorSnack(false);
  };

  const getJyotirling = async () => {
    const response = await fetch(`${server}jyotirlings`);
    const temple = await response.json();
    setTempleList(temple?.data);
  };

  const toggleAddTempleDrawer = () => {
    setOpenAddTempleDrawer(!openAddTempleDrawer);
  };

  const toggleUpdateTempleDrawer2 = (element: string) => {
    toggleUpdateTempleDrawer();
    setSelectedTempleId(element);
  };

  const toggleUpdateTempleDrawer = () => {
    setOpenUpdateTempleDrawer(!openUpdateTempleDrawer);
  };

  const toggleDeleteModal = (element: string) => {
    setOpenDeleteModal(!openDeleteModal);
    setSelectedTempleId(element);
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleDelete = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${server}jyotirlings/${selectedTempleId}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        closeDeleteModal();
        setDeleteSnack(!deleteSnack);
        getJyotirling();
      }
    } catch (e) {
      console.dir(e);
      closeDeleteModal();
    }
  };

  return (
    <>
      <PageBanner title={"Jyotirling"} />
      <Grid className={"contentWraper"}>
        <Grid
          className="container"
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid className="leftSideBar">
            <Button
              className={"primary-btn"}
              variant={"contained"}
              text={"Add New"}
              onClick={toggleAddTempleDrawer}
            />
          </Grid>
          <Grid className="rightSection">

            {templeList &&
              templeList.map((item: templeType) => (
                <Grid
                  size={12}
                  container
                  className={"blockA mb-4"}
                  key={item?._id}
                >
                  <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                    <Stack className="imgWarpA">
                      <img src={item.imgPath} alt={"Mahadev"} />
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 8 }} className={"p-2"}>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack>
                        <TypoGraphy
                          variant={"h3"}
                          typeClass={"semi-bold-font pb-1"}
                        >
                          {item.name}
                        </TypoGraphy>
                      </Stack>
                      <Stack flexDirection={"row"}>
                        <CustomIconBtn
                          IconComponent={Edit}
                          iconClass={"edit-btn"}
                          onClick={() => toggleUpdateTempleDrawer2(item?._id)}
                        />
                        <CustomIconBtn
                          IconComponent={Delete}
                          iconClass={"delete-btn"}
                          onClick={() => toggleDeleteModal(item?._id)}
                        />
                      </Stack>
                    </Stack>
                    <Stack className={"pb-2"}>
                      <TypoGraphy variant={"body1"}>
                        {item.description}
                      </TypoGraphy>
                    </Stack>
                    <Stack>
                      <TypoGraphy variant={"body1"}>
                        <strong>City : </strong> {item.city}
                      </TypoGraphy>
                    </Stack>
                    <Stack className={"pb-2"}>
                      <TypoGraphy variant={"body1"}>
                        <strong>State : </strong>
                        {item.state}
                      </TypoGraphy>
                    </Stack>

                    <Stack>
                      <TypoGraphy variant="body1" typeClass={"regular-font"}>
                        Location :{" "}
                        <a
                          href={`https://www.google.com/maps?q=${item?.location?.latitude},${item?.location?.longitude}`}
                          target="_blank"
                        >
                          Open in Google Maps
                        </a>
                      </TypoGraphy>
                    </Stack>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <AddTemple
          openAddTempleDrawer={openAddTempleDrawer}
          toggleAddTempleDrawer={toggleAddTempleDrawer}
          openSnack={addSnack}
          setOpenSnack={setAddSnack}
          errorSnack={errorSnack}
          setErrorSnack={setErrorSnack}
          setErrorVal={setErrorVal}
        />
        <UpdateTemple
          openUpdateTempleDrawer={openUpdateTempleDrawer}
          toggleUpdateTempleDrawer={toggleUpdateTempleDrawer}
          currentTemple={currentTemple}
          openSnack={updateSnack}
          setOpenSnack={setUpdateSnack}
          errorSnack={errorSnack}
          setErrorSnack={setErrorSnack}
          setErrorVal={setErrorVal}
        />

        <DeleteModal
          openDeleteModal={openDeleteModal}
          handleDelete={handleDelete}
          closeDeleteModal={closeDeleteModal}
        />
      </Grid>

      {/* Snack bar for Success Message */}
      <Snackbar
        open={addSnack}
        autoHideDuration={4000}
        onClose={handleAddSnackClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleAddSnackClose}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Temple added"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Success Message */}
      <Snackbar
        open={updateSnack}
        autoHideDuration={4000}
        onClose={handleUpdateSnackClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleUpdateSnackClose}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Temple Updated"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Delete Temple Message */}
      <Snackbar
        open={deleteSnack}
        autoHideDuration={6000}
        onClose={handleDeleteSnackClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleDeleteSnackClose}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Temple deleted"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Form Error */}
      <Snackbar
        open={errorSnack}
        autoHideDuration={4000}
        onClose={handleSnackErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar error"
      >
        <Alert
          icon={<Warning />}
          onClose={handleSnackErrorClose}
          severity="error"
          variant="filled"
        >
          <TypoGraphy variant={"h4"} typeClass={"regular-font"}>
            {`Please enter the ${errorVal}.`}
          </TypoGraphy>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Jyotirlinga;
