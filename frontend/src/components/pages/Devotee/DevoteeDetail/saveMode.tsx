import Grid from "@mui/material/Grid2";
import "../style.scss";
import { Stack} from "@mui/material";
import dayjs from "dayjs";
import { devoteeType } from "../constants";
import TypoGraphy from "../../../common/Typography";
import CustomBtn from "../../../common/Button";

interface Props {
  formData?: devoteeType;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
}

const SaveMode: React.FC<Props> = ({ formData, isEditMode, setIsEditMode }) => {
  return (
    <>
      <Grid size={12} spacing={2} className="formWrapper" container>
        <Grid size={6} display={"flex"} justifyContent={'space-between'}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Name :</strong> {formData?.firstName}{" "}{formData?.lastName}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Date of Birth :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Age :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Mobile :</strong>{" "}
              {formData?.mobile}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Email :</strong>{" "}
              {formData?.email}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Qualification :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Weight :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Height :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Hobbies :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Hobbies :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Address :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
          </Stack>
        </Grid>
        <Grid size={6} display={"flex"}>
          <Stack className="mr-2">
            <TypoGraphy variant="h6">
              <strong> Comments :</strong>{" "}
              {formData?.birthDate &&
                dayjs(formData?.birthDate).format("MMM DD, YYYY")}
            </TypoGraphy>
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
