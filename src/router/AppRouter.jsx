import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth/pages";

import NotFoundPage from "../components/NotFoundPage";
import { JournalPage } from "../journal/pages/JournalPage";
import { AuthLayout } from "../auth/layout/AuthLayout";
import { JournalLayout } from "../journal/layout/JournalLayout";
import { PublicLayout } from "../public/layout/PublicLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import { AuthHandler } from "../auth/AuthHandler";

const routes = [
  {
    path: "/",
    element: <AuthHandler />,
    children: [
      //RUTAS PUBLICAS
      {
        path: "/",
        element: <PublicLayout />,
        errorBoundary: <ErrorBoundary />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: "login", element: <LoginPage /> },
          {
            path: "register",
            element: <RegisterPage></RegisterPage>,
          },
        ],
      },
      //RUTAS PRIVADAS
      {
        path: "/app",
        element: <JournalLayout />,
        children: [{ index: true, element: <JournalPage></JournalPage> }],
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
});

export default router;
