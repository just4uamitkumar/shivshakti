import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CloseRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import TypoGraphy from "../Typography";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style.scss";
import useViewportWidth from "../../../utils/useViewportWidth";
import { smallDesktop } from "../../GlobalConstants";

interface Props {
    anchor: "top" | "left" | "bottom" | "right";
    openDrawer?: boolean;
    toggleDrawer: (
        open: boolean
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    drawerClass?: string;
    closeBtnClass?: string;
    drawerTitle?: React.ReactNode;
    titleClass?: string;
    children?: React.ReactNode;
    onCustomAction?: () => void;
}

const CustomDrawer: React.FC<Props> = ({
    anchor,
    openDrawer,
    toggleDrawer,
    drawerClass,
    closeBtnClass,
    drawerTitle,
    titleClass,
    children,
    onCustomAction
}) => {
    const windowWidth = useViewportWidth();
    const handleCustomAction = () => {
        if (onCustomAction) {
            onCustomAction();
        }
    }
    return (
        <Drawer
            anchor={anchor}
            open={openDrawer}
            onClose={toggleDrawer(false)}
            className={drawerClass}
        >
            <Box role="presentation">
                {windowWidth < smallDesktop ? (
                    <>
                        <Grid container item xs={12} justifyContent={"flex-end"}>
                            <IconButton
                                onClick={() => {
                                    toggleDrawer(false);
                                    handleCustomAction();
                                }}
                                className={closeBtnClass}
                            >
                                <CloseRounded />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <TypoGraphy variant="h1" component={"h1"} typeClass={titleClass}>
                                {drawerTitle}
                            </TypoGraphy>
                        </Grid>

                        <SimpleBar className="drawer-scroll">
                            <Grid container item xs={12}>
                                {children}
                            </Grid>
                        </SimpleBar>
                    </>
                ) : (
                    <Grid container item xs={12}>
                        {children}
                    </Grid>
                )}
            </Box>
        </Drawer>
    );
};

export default CustomDrawer;
