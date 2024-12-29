import Grid from "@mui/material/Grid2";
import React from "react";
import NoData from "../../shared/NoData";
import { DataGrid } from "@mui/x-data-grid";
import { columns, paginationModel } from "./columns";

interface Props {
    devoteeList:[];
}

const RightPanel: React.FC<Props> = ({ devoteeList }) => {
  return (
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
  );
};

export default RightPanel;
