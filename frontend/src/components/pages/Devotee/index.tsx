import Grid from "@mui/material/Grid2";
import { DataGrid } from "@mui/x-data-grid";
import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import NoData from "../../shared/NoData";
import { server } from "../../../redux/store";
import { columns, paginationModel } from "./columns";
import LeftPanel from "./LeftPanel";

const Devotee: React.FC = () => {
  const [devoteeList, setDeveteeList] = useState<[]>([]);

  useEffect(() => {
    getDevotee();
  }, []);

  const getDevotee = async () => {
    const response = await fetch(`${server}devotee`);
    const people = await response.json();
    setDeveteeList(people?.data);
  };

  return (
    <>
      <PageBanner title={"Devotee"} />
      <Grid className={"contentWraper"}>
        <Grid
          className="container"
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid className="leftSideBar">
            <LeftPanel/>
          </Grid>
          <Grid className="rightSection">
            <Grid size={12}>
              {devoteeList.length === 0 ? (
                <NoData message={"Data is not available"} hasImage={true} />
              ) : (
                <DataGrid
                  rows={devoteeList}
                  columns={columns}
                  initialState={{ pagination: { paginationModel } }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  sx={{ border: 0 }}
                  getRowId={(row) => row?._id}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Devotee;
