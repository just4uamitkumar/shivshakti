import { Grid } from "@mui/material";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter , FaLinkedinIn , FaPinterestP  } from "react-icons/fa";
import IconBtn from "../../common/IconBtn";

const Courtesy: React.FC = () => {
  return (
    <>
      <section className="curtesy">
        <Grid className="container" spacing={2} container>
          <Grid size={6} className="curtseyLinks">
            <ul>
              <li>
                <Link to="/">Join the Shiva</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>

              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Media</Link>
              </li>
            </ul>
          </Grid>
          <Grid size={6} className="socialLinks" justifyContent={"flex-end"} display={"flex"}>
            <ul>
              <li>
                <IconBtn IconComponent={FaFacebookF } />
              </li>
              <li>
                <IconBtn IconComponent={FaTwitter } />
              </li>
              <li>
                <IconBtn IconComponent={FaLinkedinIn } />
              </li>
              <li>
                <IconBtn IconComponent={FaPinterestP} />
              </li>
            </ul>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Courtesy;
