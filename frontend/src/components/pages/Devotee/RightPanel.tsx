import Grid from "@mui/material/Grid2";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import NoData from "../../shared/NoData";
import { DataGrid } from "@mui/x-data-grid";
import { paginationModel } from "./columns";
import LoadUI from "../../shared/Loader/LoadUI";
import { devoteeType } from "./constants";
import Button from "../../common/Button";
import CustomIconBtn from "../../common/IconBtn";
import { Delete, Edit } from "@mui/icons-material";

interface Props {
  devoteeList: devoteeType[];
  loading?: boolean;
  toggleEditDrawer: (id: string) => void;
  toggleDeleteModal:(id: string) => void;
}

const RightPanel: React.FC<Props> = ({
  devoteeList,
  loading,
  toggleEditDrawer,
  toggleDeleteModal
}) => {
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 170 },
    {
      field: "fullName",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row?.middleName || ""} ${row.lastName || ""}`,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 170,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "state",
      headerName: "State",
      width: 190,
    },
    {
      field: "zipcode",
      headerName: "Pin Code",
      width: 90,
    },
    {
      field: "qualification",
      headerName: "Qualification",
      type: "number",
      width: 290,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <CustomIconBtn
            IconComponent={Edit}
            iconClass={"edit-btn"}
            onClick={() => toggleEditDrawer(params.row?._id)}
          />
          <CustomIconBtn
            IconComponent={Delete}
            iconClass={"delete-btn"}
            onClick={() => toggleDeleteModal(params.row?._id)}
          />
        </>
      ),
    },
  ];

  return (
    <Grid size={12}>
      {loading && !devoteeList ? (
        <LoadUI />
      ) : devoteeList.length === 0 ? (
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
