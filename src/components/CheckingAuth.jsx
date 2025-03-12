import { Box, CircularProgress, Grid } from "@mui/material";
import React from "react";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      margin={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        item
        sx={{
          width: { sm: 450 },
          //   backgroundColor: "secondary.main",
          padding: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
