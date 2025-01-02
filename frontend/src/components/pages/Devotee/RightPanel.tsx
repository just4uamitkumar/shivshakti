import Grid from "@mui/material/Grid2";
import React from "react";
import NoData from "../../shared/NoData";
import { DataGrid } from "@mui/x-data-grid";
import { columns, paginationModel } from "./columns";
import LoadUI from "../../shared/Loader/LoadUI";
import { devoteeType } from "./constants";

interface Props {
  devoteeList: devoteeType[];
  loading?: boolean;
}

const RightPanel: React.FC<Props> = ({ devoteeList, loading }) => {
  console.log(devoteeList)
  return (
    <Grid size={12}>
      {loading && !devoteeList ? (
        <LoadUI />
      ) :  devoteeList.length === 0 ? (
        <NoData message={"Data is not available"} hasImage={true} />
      ) : (
        <DataGrid
          rows={devoteeList}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(row) => row?._id}
        />
      )}
    </Grid>
  );
};

export default RightPanel;
