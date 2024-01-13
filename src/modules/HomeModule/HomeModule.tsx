import { Container, Grid } from "@mui/material";
import { HomeHeader } from "./components/HomeHeader";
import { CardList } from "./components/CardList";

export const HomeModule = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HomeHeader />
        </Grid>
        <CardList />
      </Grid>
    </Container>
  );
};
