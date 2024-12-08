import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SvgIconProps,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import CustomIcon from "../Icon";

interface Props {
  headContent?: React.ReactNode;
  details?: React.ReactNode;
  headClass?: string;
  contentClass?: string;
  accordianClass?: string;
  iconClass?: string;
  iconName?: React.ElementType<SvgIconProps>;
  expanded: boolean;
  onChange: () => void;
}

const CustomAccordion: React.FC<Props> = ({
  headContent,
  headClass,
  contentClass,
  accordianClass,
  iconClass,
  details,
  iconName,
  expanded,
  onChange,
}) => {

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      className={accordianClass}
    >
      <AccordionSummary
        className={headClass}
        expandIcon={<CustomIcon
          iconClass={iconClass}
          IconComponent={iconName || ExpandMore}
        />}
      >
        {headContent}
      </AccordionSummary>
      <AccordionDetails className={contentClass}>{details}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
