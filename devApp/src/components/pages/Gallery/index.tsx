import { Grid, Stack } from "@mui/material";

import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import ProgressBar from "../../shared/Footer/ProgressBar";

const Gallery: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <>
      <PageBanner title={"Gallery"} />

      <Grid className="container pb-4 pt-4" spacing={3} container>
        <Grid size={12}>
          <ProgressBar value={value} onComplete={() => setSuccess(true)} />
          <Stack className="text-center">
            {success ? "Complete!" : "Loading..."}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Gallery;
