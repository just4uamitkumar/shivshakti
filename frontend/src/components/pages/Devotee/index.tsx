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
import { getDevotees } from "../../../features/devoteeReducer/action";
import { devoteeType } from "./constants";

const Devotee: React.FC = () => {
  const [devoteeList, setDeveteeList] = useState<devoteeType[]>([]);
  const [isAddDrawer, setISAddDrawer] = useState<boolean>(false);
  const [addSnack, setAddSnack] = useState<boolean>(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");

  const dispatch = useAppDispatch();
  const {
    data,
    loading,
    success,
  } = useAppSelector((state) => state.devotees);

  useEffect(() => {
    if (!success) {
      dispatch(getDevotees());
    }
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setDeveteeList(data);
    }
  }, [dispatch, data]);

  const handleAddSnack = () => {
    setAddSnack(false);
  };

  const handleSnackError = () => {
    setErrorSnack(false);
  };

  const toggleAddDrawer = () => {
    setISAddDrawer(!isAddDrawer);
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
            <RightPanel devoteeList={devoteeList} loading={loading} />
          </Grid>
        </Grid>
      </Grid>
      <AddDrawer
        isAddDrawer={isAddDrawer}
        toggleAddDrawer={toggleAddDrawer}
        addSnack={addSnack}
        setAddSnack={setAddSnack}
        errorSnack={errorSnack}
        setErrorSnack={setErrorSnack}
        setErrorVal={setErrorVal}
      />

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
            {`Please enter the ${errorVal}.`}
          </TypoGraphy>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Devotee;
