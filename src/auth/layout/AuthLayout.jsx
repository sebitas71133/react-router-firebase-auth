import { Box, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthLayout = () => {
  const { status } = useSelector((state) => state.auth);

  console.log(status);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          color: "white",
          fontWeight: "bold",
          padding: 2,
        }}
        component={Link}
        to="/"
      >
        <HomeIcon
          fontSize="large"
          sx={{
            color: "secondary.main",
            "&:hover": { transform: "scale(1.2)" },
          }}
        />
      </Box>
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "secondary.main",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Outlet></Outlet>
      </Grid>
    </Grid>
  );
};
