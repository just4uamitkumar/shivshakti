import Grid from "@mui/material/Grid2";
import "../style.scss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import CustomBtn from "../../../common/Button";
import { cityType, countryType, devoteeType, stateType } from "../constants";
import { fieldName } from "../enum";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect, useState } from "react";
import {
  getCities,
  getCountries,
  getStates,
} from "../../../../features/countryReducer/action";
import { iso } from "../../../../features/countryReducer/api";

interface Props {
  formData?: devoteeType;
  setFormData: (formData: devoteeType) => void;
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
  setFormData,
  handleChange,
  handleBirthDate,
  setIsEditMode,
  isEditMode,
  submitHandler,
}) => {
  const { countries, states, cities, isCountrySuccess } = useAppSelector(
    (state) => state.countries
  );
  const dispatch = useAppDispatch();

  const [countryISO2, setCountryISO2] = useState<string>("");
  const [stateISO2, setStateISO2] = useState<string>("");

  useEffect(() => {
    if (!isCountrySuccess) {
      dispatch(getCountries());
    }
  }, [dispatch, isCountrySuccess]);

  useEffect(() => {
    if (formData?.country?.iso2) {
      const countryCode: string = formData?.country?.iso2 ?? "";
      setCountryISO2(countryCode);
    }
    if (formData?.state?.iso2) {
      const stateCode: string = formData?.state?.iso2 ?? "";
      setStateISO2(stateCode);
    }
  }, [formData]);

  useEffect(() => {
    if (countryISO2) {
      dispatch(getStates(countryISO2));
    }
  }, [countryISO2, dispatch]);

  useEffect(() => {
    const isoCode: iso = {
      stateIso2: stateISO2,
      countryIso2: countryISO2,
    };
    if (countryISO2 && stateISO2) {
      dispatch(getCities(isoCode));
    }
  }, [countryISO2, stateISO2, dispatch]);


  return (
    <>
      <Grid size={12} spacing={2} className="devoteeForm" container>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            name="address1"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Address Line 2"
            variant="outlined"
            value={formData?.address2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            name="address2"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Nearest Land Mark"
            variant="outlined"
            value={formData?.landMark}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            name="landMark"
          />
        </Grid>
        <Grid size={4}>
          <FormControl className="selectDropdown">
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              name={fieldName.country}
              value={formData?.country}
              label="Country"
              onChange={(
                e:
                  | React.ChangeEvent<HTMLInputElement>
                  | SelectChangeEvent<string>
              ) => {
                handleChange(e);
                setFormData({
                  ...formData,
                  country: e.target.value,
                  state: { id: null, iso2: null, name: null },
                  city: {
                    id: null,
                    latitude: null,
                    longitude: null,
                    name: null,
                  },
                });
              }}
            >
              <MenuItem value={formData?.country}>{formData?.country?.name}</MenuItem>
              {countries &&
                countries?.map((country: countryType) => (
                  <MenuItem key={country.id} value={country}>
                    {country.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={4}>
          <FormControl className="selectDropdown">
            <InputLabel id="state-label">State</InputLabel>
            <Select
              disabled={countryISO2 === ""}
              labelId="state-label"
              name={fieldName.state}
              value={formData?.state}
              label="State"
              onChange={(
                e:
                  | React.ChangeEvent<HTMLInputElement>
                  | SelectChangeEvent<string>
              ) => {
                handleChange(e);
                setFormData({
                  ...formData,
                  state: e.target.value,
                  city: {
                    id: null,
                    latitude: null,
                    longitude: null,
                    name: null,
                  },
                });
              }}
            >
              <MenuItem value={formData?.state}>{formData?.state?.name}</MenuItem>
              {states &&
                states?.map((state: stateType) => (
                  <MenuItem key={state.id} value={state}>
                    {state.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl className="selectDropdown">
            <InputLabel id="city-label">City</InputLabel>
            <Select
              disabled={stateISO2 === ""}
              labelId="city-label"
              name={fieldName.city}
              value={formData?.city}
              label="City"
              onChange={(
                e:
                  | React.ChangeEvent<HTMLInputElement>
                  | SelectChangeEvent<string>
              ) => {
                handleChange(e);
              }}
            >
              <MenuItem value={formData?.city}>{formData?.city?.name}</MenuItem>
              {cities &&
                cities?.map((city: cityType) => (
                  <MenuItem key={city?.id} value={city}>
                    {city.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={4}>
          <TextField
            label="Zip Code"
            variant="outlined"
            value={formData?.zipCode}
            name="zipCode"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Comments"
            variant="outlined"
            value={formData?.comments}
            name="comments"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
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
