import { RadioGroup, RadioGroupProps, FormControlLabel, Radio } from '@mui/material';

interface Props extends RadioGroupProps {
  options?: { label: string, value: string }[];
  RadioGrpClass?: string;
}

const RadioGrp: React.FC<Props> = ({ options, RadioGrpClass, ...props }) => {
  return (
    <RadioGroup {...props} className={RadioGrpClass}>
      {options?.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioGrp;