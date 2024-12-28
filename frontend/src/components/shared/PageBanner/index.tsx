import Grid from "@mui/material/Grid2";
import "./style.scss";
import { Stack } from "@mui/material";

interface Props {
  title?: string;
}

const PageBanner: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Grid className="pageBanner" container>
        <Grid className="container" textAlign={"center"}>
          <Stack className="pageTitle text-center">{title}</Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default PageBanner;