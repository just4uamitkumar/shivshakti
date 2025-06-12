import "./style.scss";
import { Stack, Grid } from "@mui/material";
import mahadevImg from "../../../../styles/assets/images/web/MahadevImg.jpg";
import TypoGraphy from "../../../common/Typography";

const ContentSection: React.FC = () => {
  return (
    <>
      <Grid
        className="contentSection"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container blockA" container spacing={{md:4, xs:1}}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Stack className="imgWarpA">
              <img src={mahadevImg} alt={"Mahadev"} />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 8 }} className={'p-2'}>
            <Stack>
              <TypoGraphy variant={"h2"} typeClass={"semi-bold-italic pb-1"}>
                {'Loving Shiva, Loving Others and Serving the World'}
              </TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant={"body1"}>
                {
                  'We’d love to meet you! Come check us out this SUNDAY where you can meet us and see if New Life Church might be a good fit for you. Our heart and soul is to introduce and connect people with the living and powerful God.'
                }
              </TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant={"body1"}>
                {
                  'Mamata Machinery IPO bidding opened for subscription on December 19, 2024 and will close on December 23, 2024. The allotment for the Mamata Machinery IPO is expected to be finalized on Tuesday, December 24, 2024. Mamata Machinery IPO will list on BSE, NSE with tentative listing date fixed as Friday, December 27, 2024.'
                }
              </TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant={"body1"}>
                {
                  'We’d love to meet you! Come check us out this SUNDAY where you can meet us and see if New Life Church might be a good fit for you. Our heart and soul is to introduce and connect people with the living and powerful God.'
                }
              </TypoGraphy>
            </Stack>
            <Stack>
              <TypoGraphy variant={"body1"}>
                {
                  'Mamata Machinery IPO bidding opened for subscription on December 19, 2024 and will close on December 23, 2024. The allotment for the Mamata Machinery IPO is expected to be finalized on Tuesday, December 24, 2024. Mamata Machinery IPO will list on BSE, NSE with tentative listing date fixed as Friday, December 27, 2024.'
                }
              </TypoGraphy>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContentSection;
