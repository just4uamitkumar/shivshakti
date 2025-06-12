import "./style.scss";
import { Stack, Grid } from "@mui/material";
import TypoGraphy from "../../common/Typography";
import { Facebook, LinkedIn, Pinterest, YouTube  } from "@mui/icons-material";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <>
      <Grid
        className="footer pt-4 pb-4"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container" container spacing={4}>
          <Grid size={{ xs:6, md:3}}>
            <Stack>
              <TypoGraphy variant="h4">{"About us"}</TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant="h4">{"About us"}</TypoGraphy>
            </Stack>
          </Grid>
          <Grid size={{ xs:6, md:3}}>
            <Stack>
              <TypoGraphy variant="h4">{"Explore"}</TypoGraphy>
            </Stack>
            <Stack>
              <ul className="footer-links">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/code">Code</Link></li>
                <li><Link to="/develop">Develop</Link></li>
                <li><Link to="/todoList">To Do List</Link></li>
                <li><Link to="/">My Account</Link></li>
                <li><Link to="/">Sign In</Link></li>
              </ul>
            </Stack>
          </Grid>
          <Grid size={{ xs:6, md:3}}>
            <Stack>
              <TypoGraphy variant="h4">{"Contact info"}</TypoGraphy>
            </Stack>
            <Stack>
              <ul className="footer-links">
                <li><Link to="/devotee">Devotee</Link></li>
                <li><Link to="/">Read</Link></li>
                <li><Link to="/">Listen</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">My Account</Link></li>
                <li><Link to="/">Sign In</Link></li>
              </ul>
            </Stack>
          </Grid>
          <Grid size={{ xs:6, md:3}}>
            <Stack>
              <TypoGraphy variant="h4">{"Connect with us"}</TypoGraphy>
            </Stack>
            <Stack>
              <Stack>
                <ul className="socailList">
                  <li>
                    <Link to="/fb">
                      <Facebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/fb">
                      <LinkedIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="/fb">
                      <Pinterest />
                    </Link>
                  </li>
                  <li>
                    <Link to="/fb">
                      <YouTube />
                    </Link>
                  </li>
                </ul>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
