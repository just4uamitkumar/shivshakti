import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import NoData from "../../shared/NoData";
import { DataGrid } from "@mui/x-data-grid";
import { paginationModel } from "./columns";
import LoadUI from "../../shared/Loader/LoadUI";
import { devoteeType } from "./constants";
import CustomIconBtn from "../../common/IconBtn";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router";

interface Props {
  devoteeList: devoteeType[];
  loading?: boolean;
  toggleEditDrawer: (id: string) => void;
  toggleDeleteModal: (id: string) => void;
  handleView: (id: string) => void;
}

const RightPanel: React.FC<Props> = ({
  devoteeList,
  loading,
  toggleEditDrawer,
  toggleDeleteModal,
  handleView,
}) => {
  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row?.middleName || ""} ${row.lastName || ""}`,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      width: 120,
      valueGetter: (value, row) => row.country?.name ?? "",
    },
    {
      field: "state",
      headerName: "State",
      width: 170,
      valueGetter: (value, row) => row.state?.name ?? "",
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      valueGetter: (value, row) => row.city?.name ?? "",
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <CustomIconBtn
            IconComponent={Visibility}
            iconClass={"view-btn"}
            onClick={() => handleView(params.row?._id)}
          />
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
