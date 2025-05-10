import { Stack, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { server } from "../../../redux/store";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${server}user/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/Profile");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid size={3}>
          <Grid size={12}>
            <Stack component={"h1"}>{"Login Page"}</Stack>
          </Grid>
          <Grid size={12}>
            <Stack direction="row" spacing={2}>
              <button onClick={() => navigate("/")}>Back to Home</button>
            </Stack>
          </Grid>
          <Grid className="formWrapper" size={12}>
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
            <Stack className="mb-2">
              <button onClick={() => login()}>Login</button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
