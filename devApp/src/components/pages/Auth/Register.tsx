import CustomDrawer from "../../common/Drawer";
import { Grid, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { server } from "../../../redux/store";
import axios from "axios";
import { RIGHT } from "../../../utils/constants";
import CustomBtn from "../../common/Button";
import type { user } from "./type";
import TypoGraphy from "../../common/TypoGraphy";

interface Props {
  isRegisterDrawer?: boolean;
  toggleLoginDrawer: () => void;
  toggleRegisterDrawer: () => void;
}

const Register: React.FC<Props> = ({
  isRegisterDrawer,
  toggleLoginDrawer,
  toggleRegisterDrawer,
}) => {
  const [formData, setFormData] = useState<user>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPasswrod] = useState<string>("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>(false);

  useEffect(() => {
    if (formData?.password.length >= 8 && confirmPassword.length > 5) {
      if (confirmPassword !== formData?.password) {
        setIsPasswordSame(true);
      } else {
        setIsPasswordSame(false);
      }
    }
  }, [formData, confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswrod(e.target.value);
  };

  console.log(formData);
  console.log(confirmPassword);

  const submitHandler = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (formData.firstName.length < 3) {
      alert("Please fill a valid first name");
      return;
    }

    if (formData.lastName.length < 3) {
      alert("Please fill a valid last name");
      return;
    }

    if (formData.firstName === formData.lastName) {
      alert("First name and last name cannot be same.");
      return;
    }

    if (formData.firstName === formData.lastName) {
      alert("First name and last name cannot be same.");
      return;
    }

    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(formData.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (formData.password.length < 8) {
      alert("Please enter a valid password");
      return;
    }

    try {
      const response = await axios.post(`${server}user/register`, formData);
      console.log("Registration response:", response);
      toggleRegisterDrawer()
      alert("Register Successfully");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <CustomDrawer
        anchor={RIGHT}
        open={isRegisterDrawer}
        className={"drawer"}
        closeBtnClass={"close"}
        drawerTitle={"Register"}
        titleClass={"titleClass"}
        onClose={toggleRegisterDrawer}
        SubmitText={"Register"}
        submitHandler={submitHandler}
      >
        <Grid className="formWrapper">
          <Stack className="mb-2">
            <TextField
              label="First Name"
              variant="outlined"
              value={formData?.firstName}
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
              value={formData?.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              name="lastName"
            />
          </Stack>
          <Stack className="mb-2">
            <TextField
              label="Email ID"
              variant="outlined"
              value={formData?.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              name="email"
            />
          </Stack>
          <Stack className="mb-2">
            <TextField
              label="Password"
              variant="outlined"
              value={formData?.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              name="password"
              type="password"
            />
          </Stack>
          <Stack>
            <TextField
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleConfirmPassword(e)
              }
              name="confirmPassword"
              type="password"
            />
          </Stack>
          {isPasswordSame && (
            <Stack>
              <TypoGraphy variant="body1" typeClass="secondary-text">
                {"Password and Confirm Password must be same"}
              </TypoGraphy>
            </Stack>
          )}
        </Grid>
        <Grid
          flexDirection={"column"}
          alignItems={"flex-end"}
          display={"flex"}
          spacing={3}
        >
          <Stack direction={"row"} alignItems={"center"}>
            {"Already Registered ?"}
            <CustomBtn
              variant={"text"}
              text={"Login here"}
              btnClass={"primary-btn"}
              onClick={toggleLoginDrawer}
            />
          </Stack>
        </Grid>
      </CustomDrawer>
    </>
  );
};

export default Register;
