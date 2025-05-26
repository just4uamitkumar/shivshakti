import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { server } from "../../../redux/store";
import axios from "axios";
import PageBanner from "../../shared/PageBanner";
import type { userType } from "../../shared/Header/type";
import { FaUserCircle } from "react-icons/fa";
import TypoGraphy from "../../common/TypoGraphy";
import { Email, Phone, SportsEsports, Home } from "@mui/icons-material";

const Profile: React.FC = () => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState<Partial<userType> | null>(null);

  useEffect(() => {
    fetchProfile();
  }, [token]);

  const fetchProfile = async () => {
    try {
      if (token) {
        const response = await axios.get(`${server}user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data?.user);
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <PageBanner
        title={
          user?.firstName && user?.lastName
            ? user?.firstName + " " + user?.lastName
            : "Profile"
        }
      />
      <Grid container spacing={2} className="container profile-container">
        <Grid size={4} className="left-side">
          <Stack className="profile-image ">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                alt={user?.firstName ?? "Profile Picture"}
              />
            ) : (
              <FaUserCircle />
            )}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className="mb-2 mt-2"
          >
            <Email />
            <TypoGraphy variant="body1">
              {user?.email ?? "Not Available"}
            </TypoGraphy>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Phone />
            <TypoGraphy variant="body1">
              {user?.mobile ?? "Not Available"}
            </TypoGraphy>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className="mb-2 mt-2"
          >
            <SportsEsports />
            <TypoGraphy variant="body1">{user?.role}</TypoGraphy>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Home />
            <TypoGraphy variant="body1">
              {typeof user?.address === "string"
                ? user.address
                : user?.address
                ? JSON.stringify(user.address)
                : "Not Available"}
            </TypoGraphy>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
