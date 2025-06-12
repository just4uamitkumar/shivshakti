import { Stack, Grid } from "@mui/material";
import CustomDialog from "../../common/Dialog";

interface Props {
    openModal: boolean;
    closeModal?: () => void;
    handleUpdate:  () => void;
}

const UpdateModal: React.FC<Props> = ({ openModal, closeModal, handleUpdate }) => {
 
    return (
        <>
            <CustomDialog
                title={"Confirm Add Jyotirling"}
                dialogClass="confirm-dialog"
                open={openModal}
                onCancel={closeModal}
                onConfirm={handleUpdate}
                confirmText={"Yes, Add"}
                cancelText={"No"}
                confirmBtnClass={"primary-btn"}
                cancelBtnClass={"cancel-btn"}
                isCancelIcon={true}
                contentClass="dialog-content"
                maxWidth={'lg'}
            >
                <Grid size={12}>
                    <Stack>
                    {'Are you sure you want to update temple details ?'}
                    </Stack>
                </Grid>
            </CustomDialog>
        </>
    );
};

export default UpdateModal;