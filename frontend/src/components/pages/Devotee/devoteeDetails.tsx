import Grid from "@mui/material/Grid2";
import PageBanner from "../../shared/PageBanner";
import "./style.scss";
import { Stack } from "@mui/material";
import { useAppSelector } from "../../../redux/store";
import { useEffect, useState } from "react";
import { devoteeType } from "./constants";
import { useNavigate, useParams } from "react-router";

const DevoteeDetail: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.devotees);
  const [devotee, setDevotee] = useState<devoteeType>({});
  const param = useParams();

  useEffect(() => {
    if (data && param?.id) {
      const selectedDevotee: devoteeType = data?.find(
        (item: devoteeType) => item?._id === param?.id
      );
      setDevotee(selectedDevotee);
    }
  }, [data, param]);

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <>
      <PageBanner isleftSection={true} handleBack={handleBack}
        title={`${devotee.firstName || ""} ${devotee?.middleName || ""} ${
          devotee.lastName || ""
        }`}
      />
      <Grid className={"contentWraper"}>
        <Grid
          className="container"
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid>
            <Stack>{devotee.firstName}</Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DevoteeDetail;
