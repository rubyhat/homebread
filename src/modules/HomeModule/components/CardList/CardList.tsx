import { CardItem, cardsData } from "./cardsData";
import { Card } from "../Card";
import { Grid } from "@mui/material";

export const CardList = () => {
  return (
    <>
      {cardsData.map((card: CardItem, index) => (
        <Grid item xs={12} key={index}>
          <Card card={card} />
        </Grid>
      ))}
    </>
  );
};
