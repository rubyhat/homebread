import { Box, Typography } from "@mui/material";
import React from "react";

export const HomeHeader = () => {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ color: "var(--accent-color)" }}
      >
        Запись на Мастер Класс
      </Typography>
      <Typography>
        Меня зовут Татьяна и я научу Вас печь{" "}
        <Box component="span" sx={{ textDecoration: "underline" }}>
          вкусный и полезный
        </Box>{" "}
        хлеб дома 😊 Чтобы приобрести МК, напишите мне в{" "}
        <Box
          component="a"
          target="_blank"
          href="https://t.me/Tanyusha_ya"
          sx={{
            color: "var(--accent-color)",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Telegram
        </Box>
        <Box
          sx={{
            backgroundColor: "var(--accent-color)",
            width: 1,
            height: 4,
            margin: "16px 0",
            borderRadius: 2,
          }}
        />
      </Typography>
    </Box>
  );
};
