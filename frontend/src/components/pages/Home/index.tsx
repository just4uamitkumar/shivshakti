import Grid from "@mui/material/Grid2";
import HomeBanner from "./HomeBanner";
import EventSection from "./EventSection";
import ContentSection from "./ContentSection";
import WaySection from "./WaySection";
import BlogSection from "./BlogSection";
import { useEffect } from "react";
import { allCountries } from "../../../features/countryReducer/action";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.countries);

  useEffect(() => {
    if (!success) {
      dispatch(allCountries());
    }
  }, [dispatch, success]);

  return (
    <>
      <HomeBanner />
      <EventSection />
      <Grid className={"contentWraper pt-4  pb-4"}>
        <Grid className="container" container>
          <ContentSection />
        </Grid>
      </Grid>
      <WaySection />
      <Grid className={"contentWraper pt-4  pb-4"}>
        <Grid className="container" container>
          <BlogSection />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
