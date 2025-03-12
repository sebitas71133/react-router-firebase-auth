import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import {
  checkingAuthenticaction,
  signInWithEmailPassowrdThunk,
} from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.auth);
  console.log(isLoading);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onGoogleSignIn = () => {
    dispatch(checkingAuthenticaction()); // Aquí sí existe dispatch
  };

  const onEmailPasswordSignIn = () => {
    const email = watch("email");
    const password = watch("password");
    dispatch(signInWithEmailPassowrdThunk({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ minHeight: "450px" }}>
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "text.primary", ml: 2, opacity: 0.6 }}
        >
          {"Please enter your details"}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 4,
            color: "text.primary",
            ml: 2,
            fontWeight: "800",
            letterSpacing: 2,
            opacity: 0.8,
          }}
        >
          {"Welcome back"}
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          >
            <TextField
              label="Email address"
              type="email"
              placeholder="correo@google.com"
              sx={{
                width: "90%",
                "& .MuiInputLabel-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                },
              }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          >
            <TextField
              label="Password"
              type="password"
              placeholder="........"
              sx={{
                width: "90%",
                "& .MuiInputLabel-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                },
              }}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 4 }}>
            <Grid
              item
              xs={12}
              // md={6}
              sx={{ display: "flex", justifyContent: "center" }}
              mb={1}
            >
              <Button
                variant="contained"
                sx={{ width: "90%", textTransform: "none" }}
                type="submit"
                disabled={isLoading}
                onClick={onEmailPasswordSignIn}
              >
                Sign in
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              // md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="outlined"
                sx={{ width: "90%", textTransform: "none" }}
                disabled={isLoading}
                type="submit"
                onClick={onGoogleSignIn}
              >
                <Avatar
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google Icon"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  variant="h7"
                  sx={{ ml: 1, color: "text.primary", opacity: 0.8 }}
                >
                  Sign in with Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            {errorMessage && (
              <Alert sx={{ width: "90%" }} severity="error">
                {errorMessage}
              </Alert>
            )}
          </Grid>

          <Grid container direction="row" justifyContent="center">
            <Typography variant="body2" sx={{ mr: 2, opacity: 0.6 }}>
              Don't have an account?{" "}
            </Typography>
            <Link
              variant="body2"
              component={RouterLink}
              to="/auth/register"
              sx={{ color: "palette.primary" }}
              disabled={isLoading}
            >
              Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
