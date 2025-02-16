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
import { cityType, countryType, devoteeType, stateType } from "./constants";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getDevotees,
  updateDevotee,
} from "../../../features/devoteeReducer/action";
import EditModal from "./EditModal";
import { fieldName } from "./enum";
import {
  getCities,
  getCountries,
  getStates,
} from "../../../features/countryReducer/action";
import { iso } from "../../../features/countryReducer/api";

interface Props {
  isEditDrawer: boolean;
  setIsEditDrawer: (isEditDrawer: boolean) => void;
  toggleEditDrawer: () => void;
  editSnack?: boolean;
  setEditSnack: (openSnack: boolean) => void;
  errorSnack?: boolean;
  setErrorSnack: (errorSnack: boolean) => void;
  setErrorVal: (errorVal: string) => void;
  selectedRecord?: devoteeType;
}

const EditDrawer: React.FC<Props> = ({
  isEditDrawer,
  setIsEditDrawer,
  toggleEditDrawer,
  editSnack,
  setEditSnack,
  setErrorSnack,
  errorSnack,
  setErrorVal,
  selectedRecord,
}) => {
  const { countries, states, cities, isCountrySuccess } = useAppSelector(
    (state) => state.countries
  );

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<devoteeType>({
    _id: "",
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

  useEffect(() => {
    if (selectedRecord) {
      setFormData({
        ...formData,
        _id: selectedRecord?._id,
        firstName: selectedRecord?.firstName,
        lastName: selectedRecord?.lastName,
        mobile: selectedRecord?.mobile,
        country: selectedRecord?.country,
        state: selectedRecord?.state,
        city: selectedRecord?.city,
        comments: selectedRecord?.comments,
      });
    }
  }, [selectedRecord]);

  useEffect(() => {
    if (formData?.country?.iso2) {
      dispatch(getStates(formData?.country?.iso2));
    }
  }, [formData?.country?.iso2]);

  useEffect(() => {
    const isoCode: iso = {
      stateIso2: formData?.state?.iso2,
      countryIso2: formData?.country?.iso2,
    };
    if (isoCode.countryIso2 && isoCode.stateIso2) {
      dispatch(getCities(isoCode));
    }
  }, [formData?.country?.iso2, formData?.state?.iso2]);

  useEffect(() => {
    if (!isCountrySuccess) {
      dispatch(getCountries());
    }
  }, [dispatch, isCountrySuccess]);

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
      setErrorVal("First Name");
      return;
    }
    if (!formData.lastName) {
      setErrorSnack(!errorSnack);
      setErrorVal("Last Name");
      return;
    }
    if (!formData.country?.id) {
      setErrorVal("Country");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.state?.id) {
      setErrorVal("State");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.city?.id) {
      setErrorVal("city");
      setErrorSnack(!errorSnack);
      return;
    }
    if (!formData.mobile) {
      setErrorVal("Mobile");
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
        toggleEditDrawer();
      })
      .then(() => {
        dispatch(getDevotees());
      })
      .catch((error) => {
        console.dir(error);
        closeModal();
      });
  };

  return (
    <>
      <Drawer
        open={isEditDrawer}
        onClose={toggleEditDrawer}
        className="drawerA"
        anchor={"right"}
      >
        <Grid size={12} flexDirection={"row"}>
          <Stack>
            <TypoGraphy variant={"h4"}>{"Edit Devotee"}</TypoGraphy>
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
                  <MenuItem value={formData.country}>
                    {formData.country?.name}
                  </MenuItem>
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
                  <MenuItem value={formData.state}>
                    {formData?.state?.name}
                  </MenuItem>
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
                  <MenuItem value={formData.city}>
                    {formData.city?.name}
                  </MenuItem>
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
                text={"Update"}
                onClick={submitHandler}
              />
              <Button
                className={"cancel-btn"}
                variant={"contained"}
                text={"Cancel"}
                onClick={() => setIsEditDrawer(false)}
              />
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
      <EditModal
        closeModal={closeModal}
        openModal={openModal}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default EditDrawer;
