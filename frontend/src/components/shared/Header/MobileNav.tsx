import "./style.scss";
import { Drawer, Stack } from "@mui/material";
import Nav from "./Nav";
import TypoGraphy from "../../common/Typography";
import CustomIconBtn from "../../common/IconBtn";
import { Cancel } from "@mui/icons-material";
import Button from "../../common/Button";

interface Props {
  handleNav?: () => void;
  openNav?: boolean;
}
const MobileNav: React.FC<Props> = ({ handleNav, openNav }) => {
  return (
    <Drawer open={openNav} onClose={handleNav} className="mobile-nav">
      <Stack
        className="nav-header"
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Stack>
          <TypoGraphy variant={"h4"}> {"Menu"}</TypoGraphy>
        </Stack>
        <Stack>
          <CustomIconBtn
            IconComponent={Cancel}
            iconClass={"close-menu"}
            onClick={handleNav}
          ></CustomIconBtn>
        </Stack>
      </Stack>
      <Nav />
      <Button className={"primary-btn bottomItem"} variant={"contained"} text={"Login"} />
    </Drawer>
  );
};

export default MobileNav;
