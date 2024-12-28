import { Stack, TypographyProps, Switch, styled } from "@mui/material";
import TypoGraphy from "../Typography";

interface Props extends TypographyProps {
    label?: string;
    variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
    typeClass?: string;
    handleSwitch?: () => void;
    checked?: boolean;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 17,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(21px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#00754A',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 16,
        height: 16,
        borderRadius: '50%',
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 18 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#E7E7E7',
        boxSizing: 'border-box',
    },
}));


const CustomSwitch: React.FC<Props> = ({ variant, label, typeClass, handleSwitch, checked }) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch inputProps={{ 'aria-label': label }} onChange={handleSwitch} checked={checked} />
            <TypoGraphy variant={variant} typeClass={typeClass}>{label}</TypoGraphy>
        </Stack>
    );
};

export default CustomSwitch;