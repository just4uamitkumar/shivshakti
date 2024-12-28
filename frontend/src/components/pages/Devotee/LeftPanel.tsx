import Grid from "@mui/material/Grid2";
import React from "react";
import Button from "../../common/Button";
import { Stack } from "@mui/material";

const LeftPanel: React.FC = () => {
  return (
    <Grid size={12}>
      <Stack>
        <Button
          className={"primary-btn"}
          variant={"contained"}
          text={"Add devotee"}
        />
      </Stack>
    </Grid>
  );
};

export default LeftPanel;
