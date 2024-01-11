import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Box className="section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography component="h1" variant="h2" marginBottom={2}>
              Страница не найдена (404)
            </Typography>
            <Box marginBottom={1.5}>
              <Typography component="h5" variant="h5" marginBottom={1}>
                Что случилось?
              </Typography>
              <Typography component="p" variant="body1">
                Вы попали на страницу, которой не существует
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="h5" variant="h5" marginBottom={1}>
                Почему это произошло?
              </Typography>
              <Typography component="p" variant="body1">
                В большинстве ситуаций ошибка 404 отображается, если связь с
                сервером установлена, но информации по заданному запросу нет.
                Возможно, в адресе опечатка — такое случается при ручном наборе.
                Или страница была удалена, но сохранилась в закладках вашего
                браузера
              </Typography>
            </Box>
            <Box marginBottom={1.5}>
              <Typography component="h5" variant="h5" marginBottom={1}>
                Что делать?
              </Typography>
              <Typography component="p" variant="body1" marginBottom={1.5}>
                Поскольку мы не знаем, как и откуда вы попали на эту страницу,
                то рекомендуем вернуться на{" "}
                <Typography
                  component={Link}
                  to="/"
                  variant="body1"
                  color="blue"
                  sx={{ textDecoration: "underline" }}
                >
                  главную страницу
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: 1,
                padding: "16px 0",
              }}
            >
              <Box
                component="img"
                src="/static/images/img-page-not-found.svg"
                alt="Page not found"
                width={1}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
