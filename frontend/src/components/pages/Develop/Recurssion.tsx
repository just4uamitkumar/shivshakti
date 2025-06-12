import { Box, Divider, Stack, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";

const Recurssion: React.FC = () => {
  const teamStructure = {
    name: "Kunal",
    teams: [
      {
        name: "Harish",
        teams: [
          {
            name: "Alisha",
            teams: [
              {
                name: "Yash",
                teams: [],
              },
            ],
          },
        ],
      },
      {
        name: "Anurag",
        teams: [],
      },
    ],
  };

 
  const getFactorial = (num: number): number => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * getFactorial(num - 1);
    }
  };

  const fibonacci = (num: number): number => {
    if (num <= 1) {
      return num; // Base cases
    }
    return fibonacci(num - 1) + fibonacci(num - 2); // Recursive call
  };

  const sumArray = (arr: number[]): number => {
    if (arr.length === 0) {
      return 0; // Base case
    }
    return arr[0] + sumArray(arr.slice(1)); // Recursive call
  };

  const getTeamDetail = (t) => {
    console.log("Team...", t);
    if (t.teams.length === 0) {
      return;
    }
    t.teams.forEach((team) => {
      console.log(team.name);
      getTeamDetail(team);
    });
  };

  return (
    <>
      <Grid size={12}>
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"Recurssoin Problem 1"}
          </TypoGraphy>
        </Box>
        <Divider />
        <Box className="p-1">
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Factorial Example"}
            </TypoGraphy>
            <Stack className="pt-2">{getFactorial(5)}</Stack>
          </Grid>
          <Divider />
          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Fibonacci Example"}
            </TypoGraphy>
            <Stack className="pt-2">{fibonacci(8)}</Stack>
          </Grid>

          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Sum of Array [1, 2, 3, 4]"}
            </TypoGraphy>
            <Stack className="pt-2">{sumArray([1, 2, 3, 4])}</Stack>
          </Grid>


          <Grid size={12} className={"pb-3"}>
            <TypoGraphy variant="h4" component={"h4"} typeClass={"py-1"}>
              {"Get Team Details"}
            </TypoGraphy>
            <Stack className="pt-2">{getTeamDetail(teamStructure)}</Stack>
          </Grid>


          
        </Box>
      </Grid>
    </>
  );
};

export default Recurssion;
