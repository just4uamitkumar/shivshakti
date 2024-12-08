import { useState } from "react";
import { Tab, Tabs, Box, TabsProps, Stack } from "@mui/material";
import { tabItems } from "./models";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  tabPanelClass?: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, tabPanelClass, ...other } = props;

  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={tabPanelClass}
      {...other}
    >
      {value === index && children}
    </Stack>
  );
};

interface Props extends TabsProps {
  tabs: tabItems[];
  tabClass?: string;
  tabPanelClass?: string;
  variant?: "standard" | "scrollable" | "fullWidth";
  tabStyle?: any;
  ariaLabel?: string;
  tabBoxClass?: string;
}

const CustomTab: React.FC<Props> = ({
  tabs,
  tabClass,
  tabPanelClass,
  variant,
  tabStyle,
  ariaLabel,
  tabBoxClass
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabIndex: number) => {
    setValue(tabIndex);
  };

  return (
    <Box className={tabBoxClass}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        className={tabClass}
        variant={variant}
        sx={tabStyle}
      >
        {tabs?.map((tab, index) => (
          <Tab label={tab.label} key={index} tabIndex={0} />
        ))}
      </Tabs>
      {tabs?.map((tab, index) => (
        <TabPanel
          value={value}
          index={index}
          key={index}
          tabPanelClass={tabPanelClass}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
