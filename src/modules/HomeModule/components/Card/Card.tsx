import { CardItem } from "../CardList/cardsData";
import { Box, Typography } from "@mui/material";

interface CardProps {
  card: CardItem;
}

// todo: create button component
export const Card = ({ card }: CardProps) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        border: "2px solid",
        borderColor: "var(--accent-color)",
        maxWidth: "800px",
      }}
    >
      <Typography
        component="h6"
        variant="h6"
        sx={{ color: "var(--accent-color)", fontWeight: 700 }}
      >
        {card.title}
      </Typography>
      {card.textItems.length > 0 && (
        <Box component="ul">
          {card.textItems.map((textItem, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                marginTop: 0.75,
              }}
            >
              <Typography
                component="p"
                variant="body1"
                dangerouslySetInnerHTML={{ __html: textItem }}
              />
            </Box>
          ))}
          <Box>
            <Box
              component="a"
              href={card.priceButton.href}
              target="_blank"
              sx={{
                backgroundColor: card.priceButton.color,
                padding: 2,
                width: 1,
                marginTop: 2,
                color: "#fff",
                borderRadius: 2,
                display: "block",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              {card.priceButton.text}
            </Box>
            <Box
              component="a"
              href={card.targetButton.href}
              target="_blank"
              sx={{
                backgroundColor: card.targetButton.color,
                padding: 2,
                width: 1,
                marginTop: 2,
                color: "#fff",
                borderRadius: 2,
                display: "block",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              {card.targetButton.text}
            </Box>
          </Box>
          <Box
            component="img"
            src={card.img}
            alt="bread"
            sx={{ width: 1, borderRadius: 3, marginTop: 2 }}
          />
        </Box>
      )}
    </Box>
  );
};
