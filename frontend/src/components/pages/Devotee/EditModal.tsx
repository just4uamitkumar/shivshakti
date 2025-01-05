import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomDialog from "../../common/Dialog";

interface Props {
    openModal: boolean;
    closeModal?: () => void;
    handleUpdate: () => void;
}

const EditModal: React.FC<Props> = ({ openModal, closeModal, handleUpdate }) => {
 
    return (
        <>
            <CustomDialog
                title={"Confirm Update Devotee"}
                dialogClass="confirm-dialog"
                open={openModal}
                onCancel={closeModal}
                onConfirm={handleUpdate}
                confirmText={"Yes, Update"}
                cancelText={"No"}
                confirmBtnClass={"primary-btn"}
                cancelBtnClass={"cancel-btn"}
                isCancelIcon={true}
                contentClass="dialog-content"
                maxWidth={'lg'}
            >
                <Grid size={12}>
                    <Stack>
                    {'Are you sure you want to Update this devotee ?'}
                    </Stack>
                </Grid>
            </CustomDialog>
        </>
    );
};

export default EditModal;