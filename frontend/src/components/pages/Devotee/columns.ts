import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 170 },
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
    width: 90,
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
    width: 150,
  },
];


export const paginationModel = { page: 0, pageSize: 5 };
