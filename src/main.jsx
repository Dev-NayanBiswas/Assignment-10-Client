import { StrictMode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import CURDProvider from "./AllProviders/CURDProvider";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./AllProviders/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CURDProvider>
        <RouterProvider router={Routes} />
        <ToastContainer position='top-center' />
      </CURDProvider>
    </AuthProvider>
  </StrictMode>,
);
