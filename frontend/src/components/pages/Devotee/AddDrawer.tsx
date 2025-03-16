import Grid from "@mui/material/Grid2";
import TypoGraphy from "../../common/Typography";
import {
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import "./style.scss";
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import {
  cityType,
  countryType,
  devoteeType,
  stateType,
} from "./constants";
import AddModal from "./addModal";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  createDevotee,
  getDevotees,
} from "../../../features/devoteeReducer/action";
import { fieldName } from "./enum";
import {
  getCities,
  getCountries,
  getStates,
} from "../../../features/countryReducer/action";
import { iso } from "../../../features/countryReducer/api";

interface Props {
  isAddDrawer: boolean;
  toggleAddDrawer: () => void;
  addSnack?: boolean;
  setAddSnack: (openSnack: boolean) => void;
  errorSnack?: boolean;
  setErrorSnack: (errorSnack: boolean) => void;
  setErrorVal: (errorVal: string) => void;
}

const AddDrawer: React.FC<Props> = ({
  isAddDrawer,
  toggleAddDrawer,
  addSnack,
  setAddSnack,
  setErrorSnack,
  errorSnack,
  setErrorVal,
}) => {
  const { countries, states, cities, isCountrySuccess } = useAppSelector(
    (state) => state.countries
  );
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<devoteeType>({
    firstName: "",
    lastName: "",
    mobile: "",
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [countryISO2, setCountryISO2] = useState<string>("");
  const [stateISO2, setStateISO2] = useState<string>("");

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
    if (!isCountrySuccess) {
      dispatch(getCountries());
    }
  }, [dispatch, isCountrySuccess]);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string | countryType >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    if (!formData.country?.id) {
      setErrorVal("Country is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.state?.id) {
      setErrorVal("State is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.city?.id) {
      setErrorVal("city is Empty");
      setErrorSnack(!errorSnack);
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

  const handleCreate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      dispatch(createDevotee(formData)).then(() => {
        dispatch(getDevotees());
        closeModal();
        setAddSnack(!addSnack);
        toggleAddDrawer();
      });
    } catch (e) {
      console.dir(e);
      closeModal();
    }
  };

  return (
    <>
      <Drawer
        open={isAddDrawer}
        onClose={toggleAddDrawer}
        className="drawerA"
        anchor={"right"}
      >
        <Grid size={12} flexDirection={"row"}>
          <Stack>
            <TypoGraphy variant={"h4"}>{"Add New Devotee"}</TypoGraphy>
          </Stack>
          <Grid className="formWrapper">
            <Stack className="mb-2">
              <TextField
                label="Fist Name"
                variant="outlined"
                value={formData.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="firstName"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="lastName"
              />
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Mobile"
                variant="outlined"
                value={formData.mobile}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                onKeyUp={
                  (e: React.ChangeEvent<HTMLInputElement>) => {setFormData({
                  ...formData,
                  [e.target.name]: e.target.value.replace(/\D/g, '')
                })}}
                name="mobile"
              />
            </Stack>
            <Stack className="mb-2">
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  name={fieldName.country}
                  value={formData.country}
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
                  <MenuItem value={""}>Select Country</MenuItem>
                  {countries &&
                    countries?.map((country: countryType) => (
                      <MenuItem key={country.id} value={country}>
                        {country.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack className="mb-2">
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  disabled={countryISO2 === ""}
                  labelId="state-label"
                  name={fieldName.state}
                  value={formData.state}
                  label="State"
                  onChange={(
                    e:
                      | React.ChangeEvent<HTMLInputElement>
                      | SelectChangeEvent<string>
                  ) => {
                    handleChange(e);
                    // fetchCities(e.target.value?.iso2);
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
                  <MenuItem value={""}>Select State</MenuItem>
                  {states &&
                    states?.map((state: stateType) => (
                      <MenuItem key={state.id} value={state}>
                        {state.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack className="mb-2">
              <FormControl fullWidth>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                  disabled={stateISO2 === ""}
                  labelId="city-label"
                  name={fieldName.city}
                  value={formData.city}
                  label="City"
                  onChange={(
                    e:
                      | React.ChangeEvent<HTMLInputElement>
                      | SelectChangeEvent<string>
                  ) => {
                    handleChange(e);
                  }}
                >
                  <MenuItem value={""}>Select City</MenuItem>
                  {cities &&
                    cities?.map((city: cityType) => (
                      <MenuItem key={city?.id} value={city}>
                        {city.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack className="mb-2">
              <TextField
                label="Comments"
                variant="outlined"
                multiline
                rows={5}
                value={formData.comments}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                name="comments"
              />
            </Stack>
            <Stack flexDirection={"row"} justifyContent={"flex-end"}>
              <Button
                className={"primary-btn"}
                variant={"contained"}
                text={"Submit"}
                onClick={submitHandler}
              />
              <Button
                className={"cancel-btn"}
                variant={"contained"}
                text={"Cancel"}
                onClick={toggleAddDrawer}
              />
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
      <AddModal
        closeModal={closeModal}
        openModal={openModal}
        handleCreate={handleCreate}
      />
    </>
  );
};

export default AddDrawer;
