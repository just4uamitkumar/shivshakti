import "./style.scss";
import { Drawer } from "@mui/material";
import Nav from "./Nav";

interface Props {
  handleNav?: (openNav: boolean) => void;
  openNav?: boolean;
}
const MobileNav: React.FC<Props> = ({ handleNav, openNav }) => {
  return (
    <Drawer open={openNav} onClose={handleNav} className="mobile-nav">
      <Nav />
    </Drawer>
  );
};

export default MobileNav;
