import PageBanner from "../../shared/PageBanner";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";
import ToDoList1A from "./ToDoList1A";
import ToDoList1B from "./ToDoList1B";
import ToDoList2A from "./ToDoList2A";
import ToDoList2B from "./ToDoList2B";

type page = {
  name: string;
  comp: React.FC;
};

const ToDoList: React.FC = () => {
  const pageObj: page[] = [
    { name: "ToDoList1A", comp: () => <ToDoList1A /> },
    { name: "ToDoList1B", comp: () => <ToDoList1B /> },
    { name: "ToDoList2A", comp: () => <ToDoList2A /> },
    { name: "ToDoList2A", comp: () => <ToDoList2B /> },
  ];

  const [currentPage, setCurrentPage] = useState<React.FC>(pageObj[0].comp);

  const getPage = (item: string) => {
    const page = pageObj.find((e) => e.name === item);
    setCurrentPage(page?.comp ?? pageObj[0].comp);
  };

  return (
    <>
      <PageBanner title={"To Do List"} />
      <Grid className={"contentWraper"}>
        <Grid className="container" container>
          <Grid className={"leftSideBar"}>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"To Do List 1"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[0].name)}>
                  To Do List 1 A
                </li>
                <li onClick={() => getPage(pageObj[1].name)}>To Do List 1 B</li>
              </ul>
            </Box>
            <Box className="pl-2 pb-2">
              <TypoGraphy variant={"h6"}>{"To Do List 2"}</TypoGraphy>
              <ul className="left-links pl-1">
                <li onClick={() => getPage(pageObj[2].name)}>
                  {"To Do List 2 A"}
                </li>
                <li onClick={() => getPage(pageObj[3].name)}>
                  {" "}
                  {"To Do List 2 B"}
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

export default ToDoList;
