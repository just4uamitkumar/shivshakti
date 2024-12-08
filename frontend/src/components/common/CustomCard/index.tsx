import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

interface Props {
  headContent?: React.ReactNode;
  details?: React.ReactNode;
  headClass?: string;
  contentClass?: string;
  cardClass?: string; // Add a class for styling if needed
}

const CustomCard: React.FC<Props> = ({
  headContent,
  headClass,
  contentClass,
  cardClass,
  details,
}) => {
  return (
    <Card className={cardClass}>
      <CardHeader
        className={headClass}
        title={headContent}
      />
      <CardContent className={contentClass}>{details}</CardContent>
    </Card>
  );
};

export default CustomCard;
