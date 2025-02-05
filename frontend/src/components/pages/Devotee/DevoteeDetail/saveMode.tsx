import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomBtn from "../../../common/Button";

const SaveMode: React.FC = () => {
  return (
    <>
      <Grid size={12} spacing={2} className="formWrapper" container>
        <Grid size={4} display={"flex"}>
          <Stack className="mr-2">
            <strong>Name : </strong>
          </Stack>
          <Stack>
            {formData?.firstName} {formData?.lastName}
          </Stack>
        </Grid>
        <Grid size={4} display={"flex"}>
          <Stack className="mr-2">
            <strong>Date of Birth : </strong>
          </Stack>
          <Stack>
            {" "}
            {formData?.birthDate &&
              dayjs(formData?.birthDate)?.format("DD MMM, YYYY")}
          </Stack>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} className={"pt-4"}>
        <CustomBtn
          btnClass="primary-btn"
          text="Update My Details"
          onClick={() => setIsEditMode(!isEditMode)}
        />
      </Grid>
    </>
  );
};

export default SaveMode;
