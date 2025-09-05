import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app.jsx";
import Inicio from "./pages/inicio.jsx";
import Panel from "./pages/panel.jsx";
import Detalle from "./pages/detalle.jsx";
import Contacto from "./pages/contacto.jsx";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Inicio /> },
        { path: "panel", element: <Panel /> },
        { path: "productos/:id", element: <Detalle /> },
        { path: "contacto", element: <Contacto /> }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true
    }
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
