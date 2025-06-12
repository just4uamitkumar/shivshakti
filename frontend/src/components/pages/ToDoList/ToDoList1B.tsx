import { Box, Divider, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";

const ToDoList1B: React.FC = () => {
  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Number Problem 2"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3"></Box>
      </Grid>
    </>
  );
};

export default ToDoList1B;
