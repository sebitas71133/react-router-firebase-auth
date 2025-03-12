import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 280;

export const JournalLayout = () => {
  const { status } = useSelector((state) => state.auth);

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
