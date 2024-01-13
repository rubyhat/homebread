import { Box, Typography } from "@mui/material";
import React from "react";

export const HomeFooter = () => {
  return (
    <Box>
      <Typography component="p" fontWeight="700" fontSize={18}>
        Чтобы узнать подробнее, пожалуйста напишите мне:
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        <Box
          component="a"
          href="https://www.instagram.com/home_bread_/"
          target="_blank"
          sx={{
            backgroundColor: "#8d5b28",
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
          Мой Инстаграм
        </Box>
        <Box
          component="a"
          href="https://t.me/Tanyusha_ya"
          target="_blank"
          sx={{
            backgroundColor: "#228b22",
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
          Мой Телеграм
        </Box>
      </Box>
    </Box>
  );
};
