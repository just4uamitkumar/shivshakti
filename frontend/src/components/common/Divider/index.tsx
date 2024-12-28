import React from 'react';
import Divider, { DividerProps } from '@mui/material/Divider';

interface Props extends DividerProps {
  orientation?: 'horizontal' | 'vertical';
  flexItem?: boolean;
  dividerClass?: string
}

const CustomDivider: React.FC<Props> = ({ orientation, dividerClass, flexItem, ...props }) => {
  return (
    <Divider orientation={orientation} flexItem={flexItem} {...props} className={dividerClass} />
  );
}

export default CustomDivider;