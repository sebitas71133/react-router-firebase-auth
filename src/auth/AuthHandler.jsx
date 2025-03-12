import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { CheckingAuth } from "../components/CheckingAuth";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthHandler = () => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/app", { replace: true });
    } else if (status === "not-authenticated") {
      navigate("/", { replace: true });
    }
  }, [navigate, status]);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return <Outlet />;
};
