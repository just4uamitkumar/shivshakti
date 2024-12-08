import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardHeaderProps,
  CardContentProps,
} from "@mui/material";

interface Props {
  cardClass?: string;
  children?: React.ReactNode;
  headClass?: string;
  contentClass?: string;
  headSx?: CardHeaderProps["sx"];
  contentSX?: CardContentProps["sx"];
  darkTitle?: boolean;
  secondary?: React.ReactNode;
  title?: React.ReactNode | string;
  cardVariant?: "elevation" | "outlined";
  variant?: React.ReactNode | string;
  onClick?: () => void;
}

const MainCard: React.FC<Props> = ({
  cardClass,
  children,
  headClass,
  contentClass,
  headSx,
  contentSX,
  darkTitle,
  secondary,
  title,
  cardVariant,
  onClick,
  ...others
}) => {
  const validatedCardVariant =
    cardVariant === "elevation" || cardVariant === "outlined"
      ? cardVariant
      : undefined;

  return (
    <Card
      {...others}
      className={cardClass}
      variant={validatedCardVariant}
      onClick={onClick}
    >
      {title && (
        <CardHeader
          className={headClass}
          sx={headSx}
          title={
            darkTitle ? (
              <Typography variant="h3">{title}</Typography>
            ) : (
              (title as React.ReactNode)
            )
          }
          action={secondary}
        />
      )}

      <CardContent
        sx={contentSX}
        className={contentClass}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default MainCard;