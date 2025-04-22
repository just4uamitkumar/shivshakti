import Grid from "@mui/material/Grid2";
import "./style.scss";
import logo from "../../../styles/assets/images/web/shivShakti.png";
import { Stack } from "@mui/material";
import Nav from "./Nav";
import useViewportWidth from "../../../utils/useViewportWidth";
import { smallDesktop } from "../../GlobalConstants";
import { Link } from "react-router";
import CustomIconBtn from "../../common/IconBtn";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Menu } from "@mui/icons-material";
import Button from "../../common/Button";
import Login from "../../pages/Auth/Login";
import { logoutUser } from "../../../features/userReducer/action";
import { useAppDispatch } from "../../../redux/store";
interface Props{
  isAuthenticated?:boolean;
  user?:unknown
}

const Header: React.FC<Props> = ({isAuthenticated=false, user}) => {
  const windowWidth = useViewportWidth();

  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isLoginDrawer, setIsLoginDrawer] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const toggleLoginDrawer = () => {
    setIsLoginDrawer(!isLoginDrawer);
  };

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  console.log('user', user)

  return (
    <>
      <header>
        <Stack className="container">
          <Grid
            container
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {windowWidth > smallDesktop ? (
              <>
                <Grid size={3}>
                  <Stack className="topLogo">
                    <Link to="/">
                      <img src={logo} alt="Shiv Shakti" />
                    </Link>
                  </Stack>
                </Grid>
                <Grid
                  size={6}
                  justifyContent={"center"}
                  spacing={2}
                  display={"flex"}
                >
                  <Nav />
                </Grid>
                <Grid size={3} textAlign={"right"}>
                  {!isAuthenticated ? (
                    <Button
                      className={"primary-btn"}
                      variant={"contained"}
                      text={"Login"}
                      onClick={toggleLoginDrawer}
                    />
                  ) : (
                    <>
                    <Stack>
                    {`Welcome ${
                      user?.firstName + " " + user?.lastName
                    }`}
                    </Stack>
                    <Button
                      className={"primary-btn"}
                      variant={"contained"}
                      text={"Logout"}
                      onClick={handleLogout}
                    />
                    </>
                  )}
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  size={12}
                  container
                  justifyContent={"space-between"}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <Stack className="topLogo">
                    <Link to="/">
                      <img src={logo} alt="Shiv Shakti" />
                    </Link>
                  </Stack>
                  <Stack>
                    <CustomIconBtn
                      IconComponent={Menu}
                      iconClass={"toggle-nav"}
                      onClick={() => handleNav()}
                    />
                  </Stack>
                </Grid>
                <MobileNav handleNav={handleNav} openNav={openNav} />
              </>
            )}
          </Grid>
        </Stack>
      </header>
      {isLoginDrawer && (
        <Login
          isLoginDrawer={isLoginDrawer}
          toggleLoginDrawer={toggleLoginDrawer}
        />
      )}
    </>
  );
};

export default Header;
