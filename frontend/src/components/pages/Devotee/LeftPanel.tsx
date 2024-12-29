import Grid from "@mui/material/Grid2";
import React from "react";
import Button from "../../common/Button";
import { Stack } from "@mui/material";

interface Props {
  toggleAddDrawer?: () => void
}

const LeftPanel: React.FC<Props> = ({ toggleAddDrawer }) => {
  return (
    <Grid size={12}>
      <Stack>
        <Button
          className={"primary-btn"}
          variant={"contained"}
          text={"Add devotee"}
          onClick={toggleAddDrawer}
        />
      </Stack>
    </Grid>
  );
};

export default LeftPanel;
