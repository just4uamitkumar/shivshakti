import { Stack, Grid } from "@mui/material";
import CustomDialog from "../../common/Dialog";

interface Props {
    openDeleteModal: boolean;
    closeDeleteModal?: () => void;
    handleDelete:  () => void;
}

const DeleteModal: React.FC<Props> = ({ openDeleteModal, closeDeleteModal, handleDelete }) => {
 
    return (
        <>
            <CustomDialog
                title={"Confirm Delet from list"}
                dialogClass="confirm-dialog"
                open={openDeleteModal}
                onCancel={closeDeleteModal}
                onConfirm={handleDelete}
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
                    {'Are you sure you want to delete this temple from the list ?'}
                    </Stack>
                </Grid>
            </CustomDialog>
        </>
    );
};

export default DeleteModal;