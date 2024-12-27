import Grid from "@mui/material/Grid2";
import "./style.scss";
import { Stack } from "@mui/material";
import Button from "../../../common/Button";
import useViewportWidth from "../../../../utils/useViewportWidth";
import { smallDesktop } from "../../../GlobalConstants";

const HomeBanner: React.FC = () => {
  const windowWidth = useViewportWidth();
  return (
    <>
      <Grid
        className="homeBanner"
        container
        spacing={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid className="container" container spacing={2}>
          {windowWidth > smallDesktop && <Grid size={3} textAlign={"center"}></Grid>}
          <Grid size={{ xs: "grow", md: 6 }} offset={{xs:0, md: 2 }}>
            <Stack className="pageTitle text-center">
              {"Welcome to ShivShakti"}
            </Stack>
            <Stack
              flexDirection={"row"} justifyContent={'center'}
            >
              <Stack className={'mr-2'}>
                <Button className={'primary-btn'}  variant={'contained'}text={'About Us'}/>
              </Stack>
              <Stack className={'ml-2'}>
              <Button className={'secondary-btn'} variant={'contained'} text={'Visit Us'}/>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBanner;
