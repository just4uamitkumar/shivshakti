import { CircularProgress, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import "./style.scss";

const LoadUI: React.FC = () => {
    return (
        <Grid
            size={12}
            container
            className="noData-container"
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Stack>
                <CircularProgress
                    color="success"
                    variant="indeterminate"
                />
            </Stack>
        </Grid>
    );
};

export default LoadUI;