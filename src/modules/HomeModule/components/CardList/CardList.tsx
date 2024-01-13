import React from "react";
import { CardItem, cardsData } from "./cardsData";
import { Card } from "../Card";

export const CardList = () => {
  return (
    <>
      {cardsData.map((card: CardItem) => (
        <Card card={card} />
      ))}
    </>
  );
};
