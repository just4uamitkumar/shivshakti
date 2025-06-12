import { Box, Divider, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";

const StringProblem2: React.FC = () => {
 
  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"String Problem 2"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          
        </Box>
      </Grid>
    </>
  );
};

export default StringProblem2;
