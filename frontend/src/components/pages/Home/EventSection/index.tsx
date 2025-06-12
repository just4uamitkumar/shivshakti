import {  Grid } from "@mui/material";
import "./style.scss";
import TypoGraphy from "../../../common/Typography";

const EventSection: React.FC = () => {
  return (
    <>
      <Grid
        className="eventSection"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container" container spacing={2}>
          <Grid size={12} textAlign={"center"}>
            <TypoGraphy variant={"h1"} typeClass={"semi-bold-italic"}>
              {
                '" Shiva is everything and everyone; he is the Universe itself "'
              }
            </TypoGraphy>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EventSection;
