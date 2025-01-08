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
import { devoteeType, countryType, place, requestOptions } from "./constants";
import AddModal from "./addModal";
import { useAppDispatch } from "../../../redux/store";
import {
  createDevotee,
  getDevotees,
} from "../../../features/devoteeReducer/action";

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
  const [formData, setFormData] = useState<devoteeType>({
    firstName: "",
    lastName: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
    comments: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [countries, setCountries] = useState<countryType[]>([]);
  const [countryCode, setCountryCode] = useState<string>("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const dispatch = useAppDispatch();

  // Fetch countries on component load
  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.text())
      .then((result: string) => {
        const data: countryType[] = JSON.parse(result);
        setCountries(data);
      })
      .catch((error) => console.dir("error", error));
  }, []);

  //Fetch States when country is selected
  const fetchStates = (countryISO2: string) => {
    setCountryCode(countryISO2);
    fetch(
      `https://api.countrystatecity.in/v1/countries/${countryISO2}/states`,
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
  const fetchCities = (stateCode: string) => {
    fetch(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
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
    if (!formData.country) {
      setErrorVal("Country is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.state) {
      setErrorVal("State is Empty");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.city) {
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
                  name="country"
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
                      state: "",
                      city: "",
                    });
                  }}
                >
                  <MenuItem value={""}>Select Country</MenuItem>
                  {countries &&
                    countries?.map((country: place) => (
                      <MenuItem key={country.iso2} value={country.iso2}>
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
                  name="state"
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
                      city: "",
                    });
                  }}
                >
                  <MenuItem value={""}>Select State</MenuItem>
                  {states &&
                    states?.map((state: place) => (
                      <MenuItem key={state.iso2} value={state.iso2}>
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
                  name="city"
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
                    cities?.map((city: place) => (
                      <MenuItem key={city.name} value={city.name}>
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
