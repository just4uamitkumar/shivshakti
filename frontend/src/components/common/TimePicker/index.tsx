import * as React from 'react';
//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface Props {
    label?: string;
    value?: string;
    name?: string;
    handleChange?: any;
}

const TimeSelect: React.FC<Props> = ({ label, value, name, handleChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label={label} value={value} name={name} format={'hh:mm'}
                onChange={handleChange} />
        </LocalizationProvider>
    );
}

export default TimeSelect;