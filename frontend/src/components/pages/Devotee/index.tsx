import Grid from "@mui/material/Grid2";
import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import { server } from "../../../redux/store";
import LeftPanel from "./LeftPanel";
import AddDrawer from "./AddDrawer";
import RightPanel from "./RightPanel";
import { Alert, Snackbar } from "@mui/material";
import { TaskAlt, Warning } from "@mui/icons-material";
import TypoGraphy from "../../common/Typography";

const Devotee: React.FC = () => {
  const [devoteeList, setDeveteeList] = useState<[]>([]);
  const [isAddDrawer, setISAddDrawer] = useState<boolean>(false);
  const [addSnack, setAddSnack] = useState<boolean>(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");

  useEffect(() => {
    getDevotee();
  }, []);

  const handleAddSnack = () => {
    setAddSnack(false);
  };

  const handleSnackError = () => {
    setErrorSnack(false);
  };

  const getDevotee = async () => {
    const response = await fetch(`${server}devotee`);
    const people = await response.json();
    setDeveteeList(people?.data);
  };

  const toggleAddDrawer = () => {
    setISAddDrawer(!isAddDrawer);
    console.log("clicked");
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
            <RightPanel devoteeList={devoteeList} />
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
