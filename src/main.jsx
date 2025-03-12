import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto";
import { JournalApp } from "./JournalApp";
import "./styles.css";
import router from "./router/AppRouter";
import { AppTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthProvider } from "./auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <AppTheme>
        <RouterProvider router={router}></RouterProvider>
      </AppTheme>
    </AuthProvider>
  </Provider>
);
