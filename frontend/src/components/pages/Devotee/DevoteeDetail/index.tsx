import Grid from "@mui/material/Grid2";
import "../style.scss";
import {
  Alert,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { TaskAlt, Warning } from "@mui/icons-material";

import  { Dayjs } from "dayjs";
import EditMode from "./editMode";
import SaveMode from "./saveMode";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { devoteeType } from "../constants";
import PageBanner from "../../../shared/PageBanner";
import EditModal from "../EditModal";
import TypoGraphy from "../../../common/Typography";
import { getDevotees, updateDevotee } from "../../../../features/devoteeReducer/action";


const DevoteeDetail: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.devotees);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<devoteeType>({
    firstName: "",
    lastName: "",
    mobile: "",
    birthDate: null,
    address1:'',
    address2:'',
    landMark:'',
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
    dispatch(getDevotees());
  };

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
    if (!formData?.firstName) {
      setErrorSnack(!errorSnack);
      setErrorVal("First Name is Empty");
      return;
    }
    if (formData?.firstName.length < 3) {
      setErrorSnack(!errorSnack);
      setErrorVal("Please enter proper name");
      return;
    }
    if (!formData?.lastName) {
      setErrorSnack(!errorSnack);
      setErrorVal("Last Name is Empty");
      return;
    }
    if (!formData?.mobile) {
      setErrorVal("Mobile is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    const phoneno = /^\d{10}$/;
    if (!formData?.mobile.match(phoneno)) {
      setErrorVal("Mobile number is invalid");
      setErrorSnack(!errorSnack);
      return;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Pattern check
    if (!formData?.email) {
      setErrorVal("Email is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!emailPattern.test(formData?.email)) {
      setErrorVal("Please enter a valid email addressy");
      setErrorSnack(!errorSnack);
      return;
    }

    closeModal();
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  console.log('indexed', formData)

  const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(updateDevotee(formData))
      .then((res) => {
        closeModal();
        setEditSnack(!editSnack);
        console.log(JSON.stringify(res.meta.requestStatus));
        if (JSON.stringify(res.meta.requestStatus) === "fulfilled") {
          dispatch(getDevotees());
        }
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
            <EditMode
              formData={formData}
              setFormDate={setFormData}
              handleChange={handleChange}
              handleBirthDate={handleBirthDate}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
              submitHandler={submitHandler}
            />
          ) : (
            <SaveMode
              formData={formData}
              isEditMode={isEditMode}
              setIsEditMode={setIsEditMode}
            />
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
