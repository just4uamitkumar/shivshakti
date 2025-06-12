import { Box, Divider, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TypoGraphy from "../../common/Typography";

const NumberProblem1: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  useEffect(() => {
    const myNum: number = 1234;
    setNum1(reverseNum(myNum));

    const myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    setNum2(addAllNum(myArr));
    console.log(addAllNum(myArr));
  }, []);

  //Reverse a number
  const reverseNum = (num: number): number => {
    return parseInt(num.toString().split('').reverse().join(''), 10);
  };

  //Add All numbers
  const addAllNum = (arr: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  };

  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Number Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Show Reverse Number"}
            </TypoGraphy>
            <Stack>{num1}</Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Add all numbers in array"}
            </TypoGraphy>
            <Stack>{num2}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default NumberProblem1;
