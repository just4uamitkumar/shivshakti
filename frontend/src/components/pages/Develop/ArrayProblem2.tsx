import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import TypoGraphy from "../../common/Typography";

const ArrayProblem2: React.FC = () => {
  const [isSameArray, setIsSameArray] = useState<boolean>(false);

  useEffect(() => {
    const arr1: number[] = [1, 9, 3, 11, 7, 6];
    const arr2: number[] = [1, 9, 3, 11, 6, 7];

    setIsSameArray(compareArray(arr1, arr2));
  }, []);

  const compareArray = (item1: number[], item2: number[]) => {
    if (item1.length === item2.length) {
      const firstArr: number[] = [];
      const secondArr: number[] = [];
      for (let i = 0; i < item1.length; i++) {
        if (!item2.includes(item1[i])) {
          firstArr.push(item1[i]);
        }
      }
      for (let j = 0; j < item2.length; j++) {
        if (!item1.includes(item2[j])) {
          secondArr.push(item2[j]);
        }
      }
      if (firstArr.length === 0 && secondArr.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Array Problem 2"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Compare two array"}
            </TypoGraphy>
            <Stack>{isSameArray ? "true" : "false"}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ArrayProblem2;
