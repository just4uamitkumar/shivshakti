import { Skeleton } from "@mui/material";

interface Props {
  variant: "text" | "circular" | "rectangular";
  width?: number | string;
  height?: number | string;
}

const SkeleTon: React.FC<Props> = ({ variant, width, height }) => {
  return <Skeleton variant={variant} width={width} height={height} />;
};

export default SkeleTon;
