import { Box, Divider, Stack, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";

const Currying: React.FC = () => {

  //Currying with sum
  const sum = (a: number) => {
    return (b: number) => {
      return (c: number) => {
        return a + b + c;
      };
    };
  };

  //Currying with Evaluate
  const evaluate = (operation: string) => {
    return (b: number) => {
      return (c: number) => {
        if(operation === 'sum'){
            return b+c
        }
        if(operation === 'multiply'){
            return b*c
        }
        if(operation === 'divide'){
            return b/c
        }
        if(operation === 'subtract'){
            return b-c
        }
      };
    };
  };



  
  

  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Currying Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />
        <Box className="p-1">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Make Sum with Currying"}
            </TypoGraphy>
            <Stack className="pt-2">{sum(5)(4)(3)}</Stack>
          </Grid>
          <Divider />
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Make Evaludate with Currying"}
            </TypoGraphy>
            <Stack className="pt-2">Evaluate Sum : {evaluate('sum')(4)(3)}</Stack>
            <Stack className="pt-2">Evaluate Multiply : {evaluate('multiply')(4)(3)}</Stack>
            <Stack className="pt-2">Evaluate Divide : {evaluate('divide')(4)(3)}</Stack>
            <Stack className="pt-2">Evaluate Subtract : {evaluate('subtract')(4)(3)}</Stack>
          </Grid>

          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Infinite Currying"}
            </TypoGraphy>
            <Stack className="pt-2">Infinite Sum : { InfySum(4)(3)(7)() }</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Currying;
