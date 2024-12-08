import { SvgIconProps } from "@mui/material";

interface Props {
  IconComponent: React.ElementType<SvgIconProps>;
  color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error";
  iconClass?: string;
}

const CustomIcon: React.FC<Props> = ({ IconComponent, color, iconClass }) => {
  return <IconComponent color={color} className={iconClass} />;
};

export default CustomIcon;