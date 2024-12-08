import { Snackbar, AlertProps } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
    message: React.ReactNode;
    severity: 'error' | 'success' | 'info' | 'warning';
    yPos: 'top' | 'bottom';
    xPos: 'left' | 'right' | 'center';
    snackClass?: string;
    iconName?: React.ReactNode;
    openSnack: boolean;
    setOpenSnack: (openSnack: boolean) => void;
}

const SnackBar: React.FC<Props> = ({ message, severity, yPos, xPos, snackClass, iconName, openSnack, setOpenSnack }) => {

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    return (
        <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: yPos, horizontal: xPos }}
            className={snackClass}
        >
            <Alert onClose={handleClose} icon={iconName} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default SnackBar;