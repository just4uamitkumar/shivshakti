import { Stack, Grid } from "@mui/material";
import { increment, decrement } from "../../../features/counter/index.tsx";
import { server, useAppDispatch, useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router";
import axios from "axios";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const count = useAppSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await axios.get(`${server}user/logout`);

      alert("Logout successful!");
      localStorage.removeItem("token");
      window.location.reload()
    } catch (error) {
      console.error(" error:", error);
    }
  };
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid>
          <Stack component={"h1"}>{"Home Page"}</Stack>
          <Stack component={"h2"}>{`Count: ${count}`}</Stack>
          <Stack direction="row" spacing={2}>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </Stack>
          {localStorage.getItem("token") ? (
            <>
              <Stack direction="row" spacing={2}>
                <button onClick={() => navigate("/Profile")}>Profile</button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <button onClick={() => logout()}>Logout</button>
              </Stack>
            </>
          ) : (
            <Stack direction="row" spacing={2}>
              <button onClick={() => navigate("/Login")}>Login</button>
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
