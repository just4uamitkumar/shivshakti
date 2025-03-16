import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TypoGraphy from "../../common/Typography";
import { useEffect, useState } from "react";

const ObjectProblem1: React.FC = () => {
  const [mergedObject, setMergedObj] = useState<object>({});

  useEffect(() => {
    const firstObj: object = { name: "David", age: 45, Salary: 50000 };
    const secondObj: object = {
      age: 39,
      state: "Florida",
      Professtion: "Software Engineer",
    };
    setMergedObj(mergeObj(firstObj, secondObj));
  }, []);

  const mergeObj = (obj1: object, obj2: object): object => {
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  };

  console.log(mergedObject);
  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Object Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Merge Two Array with Function"}
            </TypoGraphy>
            <Stack>{JSON.stringify(mergedObject)}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ObjectProblem1;
