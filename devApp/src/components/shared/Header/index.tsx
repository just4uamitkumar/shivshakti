import { Stack, Grid } from "@mui/material";
import logo from "../../../styles/assets/images/web/shivShakti.png";
import { useViewportWidth } from "../../../utils/hooks";
import { Link } from "react-router";
import Nav from "./Nav";
import CustomBtn from "../../common/Button";
import Courtesy from "./courtsey";
import { smallDesktop } from "../../../utils/constants";

const Header: React.FC = () => {
  const windowWidth = useViewportWidth();

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
                <CustomBtn
                  variant={"contained"}
                  text={"Login"}
                  btnClass={"primary-btn"}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid size={9}>
                <Nav />
              </Grid>
              <Grid size={3} display={"flex"} justifyContent={"flex-end"}>
                <CustomBtn
                  variant={"contained"}
                  text={"Login"}
                  btnClass={"primary-btn"}
                />
              </Grid>
            </>
          )}
        </Grid>
      </header>
    </>
  );
};

export default Header;
