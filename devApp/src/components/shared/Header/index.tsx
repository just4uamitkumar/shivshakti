import { Stack, Grid, Menu, MenuItem } from "@mui/material";
import logo from "../../../styles/assets/images/web/shivShakti.png";
import { useViewportWidth } from "../../../utils/hooks";
import { Link } from "react-router";
import Nav from "./Nav";
import CustomBtn from "../../common/Button";
import Courtesy from "./courtsey";
import { smallDesktop } from "../../../utils/constants";
import { useEffect, useState } from "react";
import Login from "../../pages/Auth/Login";
import axios from "axios";
import { server } from "../../../redux/store";
import { FaRegUserCircle, FaCaretDown } from "react-icons/fa";
import IconBtn from "../../common/IconBtn";
import Register from "../../pages/Auth/Register";

type userType = {
  firstName: string;
  lastName: string;
  email: string;
};

const Header: React.FC = () => {
  const windowWidth = useViewportWidth();
  const [isLoginDrawer, setIsLoginDrawer] = useState<boolean>(false);
  const [isRegisterDrawer, setIsRegisterDrawer] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState<userType | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    fetchProfile();
  }, [token]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchProfile = async () => {
    try {
      if (token) {
        const response = await axios.get(`${server}user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data?.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleLoginDrawer = () => {
    if (isRegisterDrawer) {
      setIsRegisterDrawer(false);
    }
    setIsLoginDrawer(!isLoginDrawer);
  };

  const toggleRegisterDrawer = () => {
    if (isLoginDrawer) {
      setIsLoginDrawer(false);
    }

    setIsRegisterDrawer(!isRegisterDrawer);
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${server}user/logout`);
      handleClose();
      alert("Logout successful!");
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.error(" error:", error);
    }
  };

  return (
    <>
      <Courtesy />
      <header>
        <Grid className="container" spacing={2} container>
          <Grid size={3}>
            <Stack className="logo">
              <Link to="/">
                <img src={logo} alt="Shiv Shakti" />
              </Link>
            </Stack>
          </Grid>
          {windowWidth > smallDesktop ? (
            <>
              <Grid size={6}>
                <Nav />
              </Grid>
              <Grid size={3} display={"flex"} justifyContent={"flex-end"}>
                {userData ? (
                  <>
                    <Stack
                      alignItems={"center"}
                      direction={"row"}
                      className="blue"
                    >
                      <span className="mr-2">
                        <FaRegUserCircle />
                      </span>
                      <span>
                        {userData?.firstName} {userData?.lastName}
                      </span>
                      <IconBtn
                        IconComponent={FaCaretDown}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        iconClass={"menu-anchor"}
                      />
                    </Stack>

                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      elevation={0}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <CustomBtn
                    variant={"contained"}
                    text={"Login"}
                    btnClass={"primary-btn"}
                    onClick={toggleLoginDrawer}
                  />
                )}
              </Grid>
            </>
          ) : (
            <>
              <Grid size={9}>
                <Nav />
              </Grid>
              <Grid size={3} display={"flex"} justifyContent={"flex-end"}>
                {userData ? (
                  `Hi, ${userData?.firstName} ${userData?.lastName}`
                ) : (
                  <CustomBtn
                    variant={"contained"}
                    text={"Login"}
                    btnClass={"primary-btn"}
                    onClick={toggleLoginDrawer}
                  />
                )}
              </Grid>
            </>
          )}
        </Grid>
      </header>
      {isLoginDrawer && (
        <Login
          isLoginDrawer={isLoginDrawer}
          toggleLoginDrawer={toggleLoginDrawer}
          toggleRegisterDrawer={toggleRegisterDrawer}
        />
      )}
      {isRegisterDrawer && (
        <Register
          isRegisterDrawer={isRegisterDrawer}
          toggleLoginDrawer={toggleLoginDrawer}
          toggleRegisterDrawer={toggleRegisterDrawer}
        />
      )}
    </>
  );
};

export default Header;
