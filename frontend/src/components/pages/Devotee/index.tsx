import Grid from "@mui/material/Grid2";
import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import LeftPanel from "./LeftPanel";
import AddDrawer from "./AddDrawer";
import RightPanel from "./RightPanel";
import { Alert, Snackbar } from "@mui/material";
import { TaskAlt, Warning } from "@mui/icons-material";
import TypoGraphy from "../../common/Typography";
import {
  deleteDevotee,
  getDevotees,
} from "../../../features/devoteeReducer/action";
import { devoteeType } from "./constants";
import EditDrawer from "./EditDrawer";
import DeleteModal from "./DeleteModal";
import "./style.scss";
import { useNavigate } from "react-router";

const Devotee: React.FC = () => {
  const [devoteeList, setDeveteeList] = useState<devoteeType[]>([]);
  const [isAddDrawer, setIsAddDrawer] = useState<boolean>(false);
  const [addSnack, setAddSnack] = useState<boolean>(false);
  const [isEditDrawer, setIsEditDrawer] = useState<boolean>(false);
  const [editSnack, setEditSnack] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [deleteSnack, setDeleteSnack] = useState<boolean>(false);
  const [selectedDevotee, setSelectedDevotee] = useState<string>("");
  const [selectedRecord, setSelectedRecord] = useState<devoteeType>();
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, loading, success } = useAppSelector((state) => state.devotees);

  useEffect(() => {
    if (!success) {
      dispatch(getDevotees());
    }
  }, [dispatch, success]);

  useEffect(() => {
    if (selectedDevotee) {
      const record = devoteeList.find((el) => el._id === selectedDevotee);
      setSelectedRecord(record);
    }
  }, [selectedDevotee]);

  useEffect(() => {
    if (data) {
      setDeveteeList(data);
    }
  }, [dispatch, data]);

  const handleAddSnack = () => {
    setAddSnack(false);
  };

  const handleEditSnack = () => {
    setEditSnack(false);
  };

  const handleDeleteSnack = () => {
    setDeleteSnack(false);
  };

  const handleSnackError = () => {
    setErrorSnack(false);
  };

  const toggleAddDrawer = () => {
    setIsAddDrawer(!isAddDrawer);
  };

  const toggleEditDrawer = (id?: string) => {
    if (id) {
      setSelectedDevotee(id);
    }
    setIsEditDrawer(!isEditDrawer);
  };

  const toggleDeleteModal = (id: string) => {
    setOpenDeleteModal(!openDeleteModal);
    if (id) {
      setSelectedDevotee(id);
    }
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleDelete = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(deleteDevotee(selectedDevotee))
      .then((res) => {
        closeDeleteModal();
        setDeleteSnack(!deleteSnack);
        if (JSON.stringify(res).requestStatus === "fulfilled") {
          dispatch(getDevotees());
        }
      })
      .catch((error) => {
        console.dir(error);
        closeDeleteModal();
      });
  };

  const handleView = (id: string) => {
    if (id) {
     navigate(`${id}`);
    }
  };

  return (
    <>
      <PageBanner title={"Devotee"} />
      <Grid className={"contentWraper"}>
        <Grid
          className="container"
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid className="leftSideBar">
            <LeftPanel toggleAddDrawer={toggleAddDrawer} />
          </Grid>
          <Grid className="rightSection">
            <RightPanel
              devoteeList={devoteeList}
              loading={loading}
              toggleEditDrawer={(id: string) => toggleEditDrawer(id)}
              toggleDeleteModal={(id: string) => toggleDeleteModal(id)}
              handleView={(id: string) => handleView(id)}
            />
          </Grid>
        </Grid>
      </Grid>

      {isAddDrawer && (
        <AddDrawer
          isAddDrawer={isAddDrawer}
          toggleAddDrawer={toggleAddDrawer}
          addSnack={addSnack}
          setAddSnack={setAddSnack}
          errorSnack={errorSnack}
          setErrorSnack={setErrorSnack}
          setErrorVal={setErrorVal}
        />
      )}

      {isEditDrawer && (
        <EditDrawer
          isEditDrawer={isEditDrawer}
          setIsEditDrawer={setIsEditDrawer}
          toggleEditDrawer={toggleEditDrawer}
          selectedRecord={selectedRecord}
          editSnack={editSnack}
          setEditSnack={setEditSnack}
          errorSnack={errorSnack}
          setErrorSnack={setErrorSnack}
          setErrorVal={setErrorVal}
        />
      )}

      {openDeleteModal && (
        <DeleteModal
          openDeleteModal={openDeleteModal}
          handleDelete={handleDelete}
          closeDeleteModal={closeDeleteModal}
        />
      )}

      {/* Snack bar for Add Devotee Message */}
      <Snackbar
        open={addSnack}
        autoHideDuration={4000}
        onClose={handleAddSnack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleAddSnack}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Devotee added"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Update Devotee Message */}
      <Snackbar
        open={editSnack}
        autoHideDuration={4000}
        onClose={handleEditSnack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleEditSnack}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Devotee Updated"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Delete Devotee Message */}
      <Snackbar
        open={deleteSnack}
        autoHideDuration={4000}
        onClose={handleDeleteSnack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleDeleteSnack}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Devotee delete"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Form Error */}
      <Snackbar
        open={errorSnack}
        autoHideDuration={4000}
        onClose={handleSnackError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar error"
      >
        <Alert
          icon={<Warning />}
          onClose={handleSnackError}
          severity="error"
          variant="filled"
        >
          <TypoGraphy variant={"h4"} typeClass={"regular-font"}>
            {errorVal}
          </TypoGraphy>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Devotee;
