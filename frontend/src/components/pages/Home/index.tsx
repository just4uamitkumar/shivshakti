import Grid from "@mui/material/Grid2";
import HomeBanner from "./HomeBanner";
import EventSection from "./EventSection";
import ContentSection from "./ContentSection";
import WaySection from "./WaySection";
import BlogSection from "./BlogSection";

const Home: React.FC = () => {
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
