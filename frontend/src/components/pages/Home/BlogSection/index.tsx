import "./style.scss";
import { Stack, Grid } from "@mui/material";
import temple2 from "../../../../styles/assets/images/system/temple2.png";
import temple3 from "../../../../styles/assets/images/system/temple3.png";
import temple4 from "../../../../styles/assets/images/system/temple4.png";
import TypoGraphy from "../../../common/Typography";


const BlogSection: React.FC = () => {
  return (
    <>
      <Grid
        className="blogSection"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container" container spacing={2}>
          <Stack>
            <TypoGraphy variant={"h2"} typeClass={"semi-bold-font"}>
              {"From our blog"}
            </TypoGraphy>
          </Stack>
        </Grid>

        <Grid className="container" container spacing={{ xs: 5, md: 3 }}>
          <Grid size={{ xs: 12, md: 4 }} className={"blogTile"}>
            <Stack className="imgWarpper">
              <img src={temple2} alt="" />
            </Stack>
            <Stack className="textWrapper">
              <TypoGraphy variant={"h4"} typeClass={"semi-bold-font"}>
                {"Small Group Leader Training"}
              </TypoGraphy>
              <TypoGraphy variant={"body2"} typeClass={"pb-1"}>
                {"by Sunil Kumar / 0 comments"}
              </TypoGraphy>
              <TypoGraphy variant={"body1"}>
                {
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non..."
                }
              </TypoGraphy>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} className={"blogTile"}>
            <Stack className="imgWarpper">
              <img src={temple4} alt="" />
            </Stack>
            <Stack className="textWrapper">
              <TypoGraphy variant={"h4"} typeClass={"semi-bold-font"}>
                {"The Power of Scripture"}
              </TypoGraphy>
              <TypoGraphy variant={"body2"} typeClass={"pb-1"}>
                {"by Sunil Kumar / 0 comments"}
              </TypoGraphy>
              <TypoGraphy variant={"body1"}>
                {
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo..."
                }
              </TypoGraphy>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} className={"blogTile"}>
            <Stack className="imgWarpper">
              <img src={temple3} alt="" />
            </Stack>
            <Stack className="textWrapper">
              <TypoGraphy variant={"h4"} typeClass={"semi-bold-font"}>
                {"Be Inspired by Biblical Teaching"}
              </TypoGraphy>
              <TypoGraphy variant={"body2"} typeClass={"pb-1"}>
                {"by Sunil Kumar / 0 comments"}
              </TypoGraphy>
              <TypoGraphy variant={"body1"}>
                {
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non..."
                }
              </TypoGraphy>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogSection;
