import { Stack, Grid } from "@mui/material";
import React from "react";
import nodataimg from "../../../styles/assets/images/system/noData.png";
import "./style.scss";
import TypoGraphy from "../../common/Typography";

interface NoDataProps {
  message: string;
  hasImage?: boolean;
}

const NoData: React.FC<NoDataProps> = ({ message, hasImage }) => {
  return (
    <Grid
      size={12}
      container
      className="noData-container"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {hasImage && (
        <Stack>
          <img src={nodataimg} alt={message} />
        </Stack>
      )}

      <Stack>
        <TypoGraphy variant="body1">{message}</TypoGraphy>
      </Stack>
    </Grid>
  );
};

export default NoData;
