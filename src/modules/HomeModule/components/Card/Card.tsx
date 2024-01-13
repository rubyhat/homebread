import React from "react";
import { CardItem } from "../CardList/cardsData";
import { Box } from "@mui/material";

interface CardProps {
  card: CardItem;
}

export const Card = ({ card }: CardProps) => {
  return <Box>{card.title}</Box>;
};
