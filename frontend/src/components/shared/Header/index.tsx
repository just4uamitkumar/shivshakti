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

const Header: React.FC = () => {
  const windowWidth = useViewportWidth();

  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

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
                <Grid size={9} textAlign={"right"}>
                  <Nav />
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
    </>
  );
};

export default Header;
