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
import { useState } from "react";
import {
  cityType,
  countryType,
  devoteeType,
  requestOptions,
  stateType,
} from "./constants";
import AddModal from "./addModal";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  createDevotee,
  getDevotees,
} from "../../../features/devoteeReducer/action";
import { fieldName } from "./enum";

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
  const { data: coutnryList } = useAppSelector((state) => state.countries);

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
  const [countryCode, setCountryCode] = useState<string | null | undefined>("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const dispatch = useAppDispatch();

  //Fetch States when country is selected
  const fetchStates = (country: countryType) => {
    setCountryCode(country?.iso2);
    fetch(
      `https://api.countrystatecity.in/v1/countries/${country?.iso2}/states`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setStates(data);
      })
      .catch((error) => console.dir("error", error));
  };

  // Fetch cities when a state is selected
  const fetchCities = (stateCode: stateType) => {
    fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode?.iso2}/cities`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setCities(data);
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
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
      dispatch(createDevotee(formData));
      closeModal();
      setAddSnack(!addSnack);
      dispatch(getDevotees());
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
                    fetchStates(e.target.value);
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
                  {coutnryList &&
                    coutnryList?.map((country: countryType) => (
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
                    fetchCities(e.target.value);
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
                      <MenuItem key={city.id} value={city}>
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
