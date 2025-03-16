import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import TypoGraphy from "../../common/Typography";

const ArrayProblem1: React.FC = () => {
  const [interArr, setInterArr] = useState<number[]>([]);
  const [unionArr, setUnionArr] = useState<number[]>([]);
  const [uniqueArr, setUniqeuArr] = useState<number[]>([]);

  useEffect(() => {
    const myArr1: number[] = [4, 6, 8, 9, 12];
    const myArr2: number[] = [3, 6, 8, 11, 15];
    setUnionArr(unionArray(myArr1, myArr2));
    setInterArr(interArray(myArr1, myArr2));

    const myArr3: number[] = [3, 6, 8, 8, 11, 11, 15, 16];
    setUniqeuArr(removeDuplicates(myArr3));

    const myArr4: object[] = [
      { name: "Amit", age: 38, location: "Delhi" },
      { name: "Ajay", age: 40, location: "Delhi" },
      { name: "Amit", age: 35, location: "Lucknow" },
      { name: "Sachin", age: 38, location: "Agra" },
      { name: "Amit", age: 42, location: "Agra" },
      { name: "Vivek", age: 32, location: "Agra" },
      { name: "Sachin", age: 24, location: "Delhi" },
    ];
    removeDuplicateObj(myArr4);
  }, []);

  //Intersection of two arrays
  const interArray = (arr1: number[], arr2: number[]) => {
    const myArr: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        myArr.push(arr1[i]);
      }
    }
    return myArr;
  };

  //Intersection of two arrays
  const unionArray = (arr1: number[], arr2: number[]) => {
    let myArr: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        myArr.push(arr1[i]);
      }
    }

    myArr = [...myArr, ...arr2];
    return myArr;
  };

  const removeDuplicates = (arr: number[]) => {
    const myArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (!myArr.includes(arr[i])) {
        myArr.push(arr[i]);
      }
    }
    return myArr;
  };

  //Remove duplicate object
  const removeDuplicateObj = (obj: object[]) => {
    const myArr: object[] = [];
    const uniqueObject: object = {};

    for (const i in obj) {
      // Extract the title
      const objTitle = obj[i]["name"];

      // Use the title as the index
      uniqueObject[objTitle] = obj[i];
    }

    // Loop to push unique object into array
    for (const i in uniqueObject) {
      myArr.push(uniqueObject[i]);
    }

    console.log(myArr);
    return myArr;
  };

  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Array Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />
        <Box className="p-3">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"InterSection of two array"}
            </TypoGraphy>
            <Stack>{interArr.toString()}</Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Union of two array"}
            </TypoGraphy>
            <Stack>{unionArr.toString()}</Stack>
          </Grid>

          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Unique Elements of Array"}
            </TypoGraphy>
            <Stack>{uniqueArr.toString()}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ArrayProblem1;
