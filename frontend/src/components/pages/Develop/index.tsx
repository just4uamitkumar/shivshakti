import Grid from "@mui/material/Grid2";
import PageBanner from "../../shared/PageBanner";
import { useState } from "react";
import { Box } from "@mui/material";
import TypoGraphy from "../../common/Typography";
import ArrayProblem1 from "./Recurssion";
import ArrayProblem2 from "./ArrayProblem2";
import NumberProblem1 from "./NumberProblem1";
import NumberProblem2 from "./NumberProblem2";
import StringProblem1 from "./StringProblem1";
import StringProblem2 from "./StringProblem2";
import ObjectProblem1 from "./ObjectProblem1";
import Recurssion from "./Recurssion";
import Currying from "./Currying";

type page = {
  name: string;
  comp: React.FC;
};

const Develop: React.FC = () => {
  const pageObj: page[] = [
    { name: "Recurssion", comp: () => <Recurssion /> },
    { name: "ArrayProblem2", comp: () => <ArrayProblem2 /> },
    { name: "NumberProblem1", comp: () => <NumberProblem1 /> },
    { name: "NumberProblem2", comp: () => <NumberProblem2 /> },
    { name: "StringProblem1", comp: () => <StringProblem1 /> },
    { name: "StringProblem2", comp: () => <StringProblem2 /> },
    { name: "ObjectProblem1", comp: () => <ObjectProblem1 /> },
    { name: "Currying", comp: () => <Currying /> },
  ];

  const [currentPage, setCurrentPage] = useState<React.FC>(pageObj[0].comp);

  const getPage = (item: string) => {
    const page = pageObj.find((e) => e.name === item);
    setCurrentPage(page?.comp);
  };

  return (
    <>
      <PageBanner title={"Develop"} />
      <Grid className={"contentWraper"}>
        <Grid className="container" container>
          <Grid className={"leftSideBar"}>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"Recurssion Problems"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[0].name)}>
                  Recurrsion
                </li>
                <li onClick={() => getPage(pageObj[1].name)}>Compare Array</li>
              </ul>
            </Box>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"Number Problems"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[2].name)}>
                  {"Number Problem 1"}
                </li>
                <li onClick={() => getPage(pageObj[3].name)}>
                  {" "}
                  {"Number Problem 2"}
                </li>
              </ul>
            </Box>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"String Problems"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[4].name)}>
                  {"String Problem 1"}
                </li>
                <li onClick={() => getPage(pageObj[5].name)}>
                  {" "}
                  {"String Problem 2"}
                </li>
              </ul>
            </Box>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"Object Problems"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[6].name)}>
                  {"Object Problem 1"}
                </li>
                
              </ul>
            </Box>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"Cyrring Problems"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[7].name)}>
                  {"Currying Problem 1"}
                </li>
                
              </ul>
            </Box>
          </Grid>
          <Grid className="rightSection">{currentPage}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Develop;
