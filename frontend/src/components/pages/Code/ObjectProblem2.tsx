import { Box, Divider, Stack, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";

const ObjectProblem2: React.FC = () => {
  const arr1: object[] = [
    {
      name: "Amit",
      age: 39,
      salary: 35000,
      city: "Delhi",
      isSoftwareEngineer: true,
    },
    { name: "Sunil", age: 42, salary: 15000, city: "Delhi" },
    { name: "Ajay", age: 43, salary: 35000, city: "Agra" },
    {
      name: "Jairam",
      age: 45,
      salary: 32000,
      city: "Jaipur",
      isSoftwareEngineer: true,
    },
    {
      name: "Lalit",
      age: 35,
      salary: 12000,
      city: "Lucknow",
      isSoftwareEngineer: true,
    },
    { name: "Anil", age: 45, salary: 55000, city: "Delhi" },
    { name: "Jagdish", age: 45, salary: 45000, city: "Delhi" },
    { name: "JaiSingh", age: 45, salary: 51000, city: "Delhi" },
  ];

  //format array 1
  const arr3 = [
    ...arr1.filter((obj) => obj.isSoftwareEngineer !== true), // Non-software engineers
    arr1.filter((obj) => obj.isSoftwareEngineer === true), // Software engineers
  ];

  console.log(arr3);
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
            <Stack>{}</Stack>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ObjectProblem2;
