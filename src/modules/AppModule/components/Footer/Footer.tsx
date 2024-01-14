import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              padding: "16px 0",
              borderTop: "2px solid",
              borderColor: "var(--accent-color)",
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              Обучение домашней выпечке. 2020-2024.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
