import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomDialog from "../../common/Dialog";

interface Props {
    openModal: boolean;
    closeModal?: () => void;
    handleCreate: () => void;
}

const AddModal: React.FC<Props> = ({ openModal, closeModal, handleCreate }) => {
 
    return (
        <>
            <CustomDialog
                title={"Confirm Add Devotee"}
                dialogClass="confirm-dialog"
                open={openModal}
                onCancel={closeModal}
                onConfirm={handleCreate}
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
                    {'Are you sure you want to add new devotee ?'}
                    </Stack>
                </Grid>
            </CustomDialog>
        </>
    );
};

export default AddModal;