import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  DialogProps,
  Stack,
} from "@mui/material";
import CustomIconBtn from "../IconBtn";
import { CloseRounded } from "@mui/icons-material";
import "./styles.scss";

interface Props extends DialogProps {
  title?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: any;
  onCancel?: () => void;
  dialogClass?: string;
  titleClass?: string;
  contentClass?: string;
  confirmBtnClass?: string;
  cancelBtnClass?: string;
  loading?: boolean;
  isCancelIcon?: boolean;
}

const CustomDialog: React.FC<Props> = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  dialogClass,
  titleClass,
  contentClass,
  open,
  confirmBtnClass,
  cancelBtnClass,
  loading,
  isCancelIcon,
  ...props
}) => {
  return (
    <Dialog {...props} className={dialogClass} open={open}>
      {
        isCancelIcon ?
          <Stack className="dialog-header" direction="row" justifyContent={'space-between'}>
            <DialogTitle className={titleClass}>{title}</DialogTitle>
            <CustomIconBtn IconComponent={CloseRounded} onClick={onCancel} />
          </Stack>
          :
          <Stack className="dialog-header" direction="row" justifyContent={'space-between'}>
            <DialogTitle className={titleClass}>{title}</DialogTitle>
          </Stack>
      }
      <DialogContent className={contentClass}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} className={cancelBtnClass} disabled={loading}>
          {cancelText}
        </Button>
        <Button onClick={onConfirm} className={confirmBtnClass} disabled={loading}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
