import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useEffect } from "react";

const drawerWidth = 280;

export const JournalLayout = () => {
  const { status } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (status !== "authenticated") {
  //     navigate("/", { replace: true });
  //   }
  // }, [status, navigate]);

  // if (status !== "authenticated"){
  //   return <Navigate to="/" replace
  //   ></Navigate>
  // }

  console.log("Status en JournalLayout", status);

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
};
