import React from 'react';
import { Radio, RadioProps } from '@mui/material';

interface Props extends RadioProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioBtn: React.FC<Props> = ({ label, onChange, ...rest }) => {
  return (
    <div>
      <Radio onChange={onChange} {...rest} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default CustomRadioBtn;
