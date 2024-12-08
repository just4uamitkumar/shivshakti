import React, { ReactNode } from "react";
import { List, ListItem, Typography, Stack } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

interface Props {
  title?: ReactNode;
  items: ReactNode[];
  sx?: SystemStyleObject;
  listClass?: string;
  listItemClass?: string;
}

const CustomList: React.FC<Props> = ({ title, items, sx, listClass, listItemClass }) => {
  return (
    <List sx={sx} className={listClass}>
      {title && (
        <ListItem className={listItemClass}>
          <Stack>
            <Typography>{title}</Typography>
          </Stack>
        </ListItem>
      )}
      {items?.map((item, index) => (
        <ListItem key={index} className={listItemClass}>{item}</ListItem>
      ))}
    </List>
  );
};

export default CustomList;
