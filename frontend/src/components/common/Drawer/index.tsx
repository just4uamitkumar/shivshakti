import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CloseRounded } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import TypoGraphy from "../Typography";
import "./style.scss";
import Button from "../Button";

interface Props {
  anchor: "top" | "left" | "bottom" | "right";
  open?: boolean;
  onClose: () => void;
  className?: string;
  closeBtnClass?: string;
  drawerTitle?: React.ReactNode;
  titleClass?: string;
  children?: React.ReactNode;
  submitHandler?: () => void;
  SubmitText?: string;
}

const CustomDrawer: React.FC<Props> = ({
  anchor,
  open,
  className,
  onClose,
  closeBtnClass,
  drawerTitle,
  titleClass,
  children,
  submitHandler,
  SubmitText,
}) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose} className={className}>
      <Box role="presentation">
        <Grid size={12}>
          <Grid size={12}>
            <header className={"header"}>
              <TypoGraphy variant="h4" component={"h4"} typeClass={titleClass}>
                {drawerTitle}
              </TypoGraphy>
              <IconButton onClick={onClose} className={closeBtnClass}>
                <CloseRounded />
              </IconButton>
            </header>
          </Grid>
          <Grid size={12}>{children}</Grid>
          <Grid size={12}>
            <footer className="footer">
              <Button
                className={"primary-btn"}
                variant={"contained"}
                text={SubmitText}
                onClick={submitHandler}
              />
              <Button
                className={"cancel-btn"}
                variant={"contained"}
                text={"Cancel"}
                onClick={onClose}
              />
            </footer>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
