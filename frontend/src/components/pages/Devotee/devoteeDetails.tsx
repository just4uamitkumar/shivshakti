import Grid from "@mui/material/Grid2";
import PageBanner from "../../shared/PageBanner";
import "./style.scss";
import {
  Alert,
  SelectChangeEvent,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect, useState } from "react";
import { devoteeType } from "./constants";
import { useNavigate, useParams } from "react-router";
import CustomBtn from "../../common/Button";
import EditModal from "./EditModal";
import TypoGraphy from "../../common/Typography";
import { TaskAlt, Warning } from "@mui/icons-material";
import {
  getDevotees,
  updateDevotee,
} from "../../../features/devoteeReducer/action";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

const DevoteeDetail: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.devotees);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<devoteeType>({
    firstName: "",
    lastName: "",
    mobile: "",
    birthDate: null,
    country: {
      id: null,
      name: null,
      iso2: null,
      iso3: null,
      phonecode: null,
      capital: null,
      currency: null,
      native: null,
      emoji: null,
    },
    state: { id: null, iso2: null, name: null },
    city: { id: null, latitude: null, longitude: null, name: null },
    comments: "",
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editSnack, setEditSnack] = useState<boolean>(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
  const [errorVal, setErrorVal] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const param = useParams();

  useEffect(() => {
    if (data && data.length && param?.id) {
      const selectedDevotee: devoteeType = data?.find(
        (item: devoteeType) => item?._id === param?.id
      );
      setFormData(selectedDevotee);
    }
  }, [data, param]);

  const handleEditSnack = () => {
    setEditSnack(false);
  };

  const handleSnackError = () => {
    setErrorSnack(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  console.log("formData", formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBirthDate = (date: Dayjs | null) => {
    setFormData({
      ...formData,
      birthDate: date,
    });
  };

  const submitHandler = () => {
    if (!formData.firstName) {
      setErrorSnack(!errorSnack);
      setErrorVal("First Name is Empty");
      return;
    }
    if (formData.firstName.length < 3) {
      setErrorSnack(!errorSnack);
      setErrorVal("Please enter proper name");
      return;
    }
    if (!formData.lastName) {
      setErrorSnack(!errorSnack);
      setErrorVal("Last Name is Empty");
      return;
    }
    if (!formData.mobile) {
      setErrorVal("Mobile is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    const phoneno = /^\d{10}$/;
    if (!formData.mobile.match(phoneno)) {
      setErrorVal("Mobile number is invalid");
      setErrorSnack(!errorSnack);
      return;
    }

    closeModal();
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(updateDevotee(formData))
      .then(() => {
        closeModal();
        setEditSnack(!editSnack);
      })
      .then(() => {
        dispatch(getDevotees());
        setIsEditMode(!isEditMode);
      })
      .catch((error) => {
        console.dir(error);
        closeModal();
      });
  };


 

  return (
    <>
      <PageBanner
        isleftSection={true}
        handleBack={handleBack}
        title={`${formData?.firstName || ""} ${formData?.lastName || ""}`}
      />
      <Grid className={"contentWraper  pt-4  pb-4"}>
        <Grid className="container" container>
          {isEditMode ? (
            <>
              <Grid size={12} spacing={2} className="formWrapper" container>
                <Grid size={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    value={formData?.firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    name="firstName"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={formData?.lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    name="lastName"
                  />
                </Grid>
                <Grid size={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={formData.birthDate}
                      name="birthDate"
                      label="BirthDate"
                      onChange={(e: Dayjs | null) => handleBirthDate(e)}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Mobile No."
                    variant="outlined"
                    value={formData?.mobile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    name="mobile"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Email ID"
                    variant="outlined"
                    value={formData?.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    name="email"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Qualification"
                    variant="outlined"
                    value={formData?.qualification}
                    name="qualification"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Weight"
                    variant="outlined"
                    value={formData?.weight}
                    name="weight"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Height"
                    variant="outlined"
                    value={formData?.height}
                    name="height"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Hobbies"
                    variant="outlined"
                    value={formData?.hobbies}
                    name="hobbies"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Address Line 1"
                    variant="outlined"
                    value={formData?.address1}
                    name="address1"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Address Line 2"
                    variant="outlined"
                    value={formData?.address2}
                    name="address2"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Nearest Land Mark"
                    variant="outlined"
                    value={formData?.landMark}
                    name="landMark"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    value={formData?.country?.name}
                    name="country"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="State"
                    variant="outlined"
                    value={formData?.state?.name}
                    name="state"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="City"
                    variant="outlined"
                    value={formData?.city?.name}
                    name="city"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Zip Code"
                    variant="outlined"
                    value={formData?.zipCode}
                    name="zipCode"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    label="Comments"
                    variant="outlined"
                    value={formData?.comments}
                    name="comments"
                  />
                </Grid>
              </Grid>
              <Grid
                justifyContent={"space-between"}
                display={"flex"}
                className={"pt-4"}
              >
                <Grid flexDirection={"row"} display={"flex"}>
                  <Stack className="mr-1">
                    <CustomBtn
                      btnClass="cancel-btn"
                      text="Cancel"
                      onClick={() => setIsEditMode(!isEditMode)}
                    />
                  </Stack>
                  <Stack className="ml-1">
                    <CustomBtn
                      btnClass="primary-btn"
                      text="Save"
                      onClick={submitHandler}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid size={12} spacing={2} className="formWrapper" container>
                <Grid size={4} display={"flex"}>
                  <Stack className="mr-2">
                    <strong>Name : </strong>
                  </Stack>
                  <Stack>
                    {formData?.firstName} {formData?.lastName}
                  </Stack>
                </Grid>
                <Grid size={4} display={"flex"}>
                  <Stack className="mr-2">
                    <strong>Date of Birth : </strong>
                  </Stack>
                  <Stack>
                    {" "}
                    {formData?.birthDate &&
                      dayjs(formData?.birthDate)?.format("DD MMM, YYYY")}
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                display={"flex"}
                justifyContent={"center"}
                className={"pt-4"}
              >
                <CustomBtn
                  btnClass="primary-btn"
                  text="Update My Details"
                  onClick={() => setIsEditMode(!isEditMode)}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
      <EditModal
        closeModal={closeModal}
        openModal={openModal}
        handleUpdate={handleUpdate}
      />
      {/* Snack bar for Update Devotee Message */}
      <Snackbar
        open={editSnack}
        autoHideDuration={4000}
        onClose={handleEditSnack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar success"
      >
        <Alert
          icon={<TaskAlt />}
          onClose={handleEditSnack}
          severity="success"
          variant="filled"
        >
          <TypoGraphy typeClass={"regular-font"} variant={"h4"}>
            {"Success! Devotee Updated"}
          </TypoGraphy>
        </Alert>
      </Snackbar>

      {/* Snack bar for Form Error */}
      <Snackbar
        open={errorSnack}
        autoHideDuration={4000}
        onClose={handleSnackError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="snack-bar error"
      >
        <Alert
          icon={<Warning />}
          onClose={handleSnackError}
          severity="error"
          variant="filled"
        >
          <TypoGraphy variant={"h4"} typeClass={"regular-font"}>
            {errorVal}
          </TypoGraphy>
        </Alert>
      </Snackbar>
    </>
  );
};

export default DevoteeDetail;
