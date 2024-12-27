import Grid from "@mui/material/Grid2";
import BlogSection from "../Home/BlogSection";
import PageBanner from "../../shared/PageBanner";
import { useEffect } from "react";
import { server } from "../../../redux/store";

const Code: React.FC = () => {
  useEffect(() => {
    getProducts();
    geJyotirling();
  }, []);

  const getProducts = async () => {
    const products = await fetch(`${server}products`);
    const data = await products.json();
    console.log(data);
  };

  const geJyotirling = async () => {
    const products = await fetch(`${server}jyotirlings`);
    const data = await products.json();
    console.log(data);
  };

  return (
    <>
      <PageBanner title={"Code"} />
      <Grid className={"contentWraper pt-4  pb-4"}>
        <Grid className="container" container>
          <BlogSection />
        </Grid>
      </Grid>
    </>
  );
};

export default Code;
