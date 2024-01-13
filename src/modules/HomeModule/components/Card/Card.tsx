import React from "react";
import { CardItem } from "../CardList/cardsData";
import { Box, Typography } from "@mui/material";

interface CardProps {
  card: CardItem;
}

export const Card = ({ card }: CardProps) => {
  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: 2,
        border: "2px solid",
        borderColor: "var(--accent-color)",
      }}
    >
      <Typography>{card.title}</Typography>
      {card.textItems.length > 0 && (
        <Box component="ul">
          {card.textItems.map((textItem, index) => (
            <Box
              key={index}
              component="li"
              dangerouslySetInnerHTML={{ __html: textItem }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
