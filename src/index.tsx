import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./app/pages/root-page";

import "./styles/global-styles.scss";
import "./styles/colors.scss";
import MainPage from "./app/pages/main-page";
import CartPage from "./app/pages/cart-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "pizza",
        element: <MainPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
