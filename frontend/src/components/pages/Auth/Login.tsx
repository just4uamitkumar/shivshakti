import Grid from "@mui/material/Grid2";
import { RIGHT } from "../../GlobalConstants";
import CustomDrawer from "../../common/Drawer";
import "./style.scss";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { loginUser } from "../../../features/userReducer/action";

interface Props {
  isLoginDrawer?: boolean;
  toggleLoginDrawer: () => void;
}

const Login: React.FC<Props> = ({ isLoginDrawer, toggleLoginDrawer }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const loginHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(loginUser({ email, password })).then(() => {
      toggleLoginDrawer();
    });
  };

  return (
    <>
      <CustomDrawer
        anchor={RIGHT}
        open={isLoginDrawer}
        className={"drawer"}
        closeBtnClass={"close"}
        drawerTitle={"Login"}
        titleClass={"titleClass"}
        onClose={toggleLoginDrawer}
        SubmitText={"Login"}
        submitHandler={loginHandler}
      >
        <Grid className="formWrapper">
          <Stack className="mb-2">
            <TextField
              label="Email ID"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </Stack>
          <Stack className="mb-2">
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </Stack>
        </Grid>
      </CustomDrawer>
    </>
  );
};

export default Login;
