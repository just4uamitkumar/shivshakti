import { Stack, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { server } from "../../../redux/store";
import axios from "axios";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (token) {
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       console.log("Decoded token:", decodedToken);
//       axios
//         .get(`${server}user/profile/${decodedToken?._id}`)
//         .then((response) => console.log("Profile data:", response))
//         .catch((error) => console.error("Error fetching profile:", error));
//     }
//   }, [token]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      if (token) {
        const response = await axios.get(`${server}user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        //   withCredentials: true,
        });
        console.log("Profile data:", response);
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
              <button onClick={() => navigate("/")}>Back to Home</button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
