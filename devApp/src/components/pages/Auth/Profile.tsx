import { Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { server } from "../../../redux/store";
import axios from "axios";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, [token]);

  const fetchProfile = async () => {
    try {
      if (token) {
        const response = await axios.get(`${server}user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data?.user);
      }
    } catch (err) {
      //   setError("Failed to fetch profile");
      console.error(err);
    } finally {
      //   setLoading(false);
      console.log("Loading complete");
    }
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid size={3}>
          <Grid size={12}>
            <Stack component={"h1"}>{"Profile Page"}</Stack>
          </Grid>
          <Grid size={12}>
            <Stack direction="row" spacing={2}>
              <button onClick={() => navigate("/")}>Back to Home</button>
            </Stack>
          </Grid>
          <Grid size={12}>
            <Stack direction="row" spacing={2}>
              <button onClick={() => navigate("/")}>Welcome {userData?.firstName} </button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
