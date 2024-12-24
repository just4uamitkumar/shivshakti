import ContentSection from "./components/shared/ContentSection";
import EventSection from "./components/shared/EventSection";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import HomeBanner from "./components/shared/HomeBanner";
import Grid from "@mui/material/Grid2";
import WaySection from "./components/shared/WaySection";
import BlogSection from "./components/shared/BlogSection";

const App: React.FC = () => {
  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
};

export default App;
