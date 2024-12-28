import Grid from "@mui/material/Grid2";
import "./style.scss";
import TypoGraphy from "../../../common/Typography";
import { Stack } from "@mui/material";
import temple1 from "../../../../styles/assets/images/system/Somnath1.png";
import Button from "../../../common/Button";

const WaySection: React.FC = () => {
  return (
    <>
      <Grid
        className="waySection"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container" container spacing={2}  alignItems={'center'}>
          <Grid size={{ xs:12, md:8}} textAlign={"center"}>
            <Stack>
              <TypoGraphy variant={"h2"} typeClass={"semi-bold-font"}>
                {"Giving is an action of worship, affection & love for Shiva."}
              </TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant={"h3"} typeClass={"regularItalic-font"}>
                {"Making a difference"}
              </TypoGraphy>
            </Stack>

            <Stack flexDirection={"row"} justifyContent={"center"}>
              <Stack className={"mr-2"}>
                <Button
                  className={"primary-btn"}
                  variant={"contained"}
                  text={"About Us"}
                />
              </Stack>
              <Stack className={"ml-2"}>
                <Button
                  className={"secondary-btn"}
                  variant={"contained"}
                  text={"Visit Us"}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs:12, md:4}} textAlign={"center"}>
            <Stack className="wayImage">
              <img src={temple1} alt="" />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WaySection;
