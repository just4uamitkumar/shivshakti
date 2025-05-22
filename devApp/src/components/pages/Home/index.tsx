import { Stack, Grid } from "@mui/material";
import { increment, decrement } from "../../../features/counter/index.tsx";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import HomeBanner from "./HomeBanner.tsx";
import Section1 from "./Section1.tsx";
import Section2 from "./Section2.tsx";
import Section3 from "./Section3.tsx";

const Home: React.FC = () => {
  const count = useAppSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid container spacing={2} flexDirection={"column"}>
        <HomeBanner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Grid>
          <Stack component={"h2"}>{`Count: ${count}`}</Stack>
          <Stack direction="row" spacing={2}>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
