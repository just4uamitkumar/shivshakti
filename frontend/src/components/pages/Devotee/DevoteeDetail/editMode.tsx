import Grid from "@mui/material/Grid2";
import "../style.scss";
import { SelectChangeEvent, Stack, TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import CustomBtn from "../../../common/Button";
import { devoteeType } from "../constants";

interface Props {
  formData?: devoteeType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => void;
  handleBirthDate: (date: Dayjs | null) => void;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
  submitHandler: () => void;
}

const EditMode: React.FC<Props> = ({
  formData,
  handleChange,
  handleBirthDate,
  setIsEditMode,
  isEditMode,
  submitHandler,
}) => {
  return (
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
              value={dayjs(formData?.birthDate)}
              name="birthDate"
              label="BirthDate"
              onChange={(date: Dayjs | null) => handleBirthDate(date)}
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
  );
};

export default EditMode;
