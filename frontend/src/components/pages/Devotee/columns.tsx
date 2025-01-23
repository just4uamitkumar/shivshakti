// import { GridColDef } from "@mui/x-data-grid";
// import CustomIconBtn from "../../common/IconBtn";
// import { Delete, Edit } from "@mui/icons-material";

export const paginationModel = { page: 0, pageSize: 5 };


// export const columns: GridColDef[] = [
//     // { field: "_id", headerName: "ID", width: 170 },
//     {
//       field: "fullName",
//       headerName: "Name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 200,
//       valueGetter: (value, row) =>
//         `${row.firstName || ""} ${row?.middleName || ""} ${row.lastName || ""}`,
//     },
//     {
//       field: "mobile",
//       headerName: "Mobile",
//       width: 170,
//     },
//     {
//       field: "country",
//       headerName: "Country",
//       width: 120,
//       // renderCell:(params) => (
//       //   console.log(params)
//       //   // console.log(params?.formattedValue)
//       // )
//       valueGetter: (value, row) => row.country?.name ?? '',
//       // valueGetter: (params) =>
//       //   coutnryList?.find((item: countryType) => item?.iso2 === params)?.name,
//     },
//     {
//       field: "state",
//       headerName: "State",
//       width: 190,
//       valueGetter: (value, row) => row.state?.name ?? '',
//     },
//     {
//       field: "city",
//       headerName: "City",
//       width: 120,
//       valueGetter: (value, row) => row.city?.name ?? '',
//     },

//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 200,
//       renderCell: (params) => (
//         <>
//           <CustomIconBtn
//             IconComponent={Edit}
//             iconClass={"edit-btn"}
//             onClick={() => toggleEditDrawer(params.row?._id)}
//           />
//           <CustomIconBtn
//             IconComponent={Delete}
//             iconClass={"delete-btn"}
//             onClick={() => toggleDeleteModal(params.row?._id)}
//           />
//         </>
//       ),
//     },
//   ];



