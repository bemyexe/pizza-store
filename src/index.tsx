import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Provider } from "react-redux";

import RootPage from "./app/pages/root-page";

import "./styles/global-styles.scss";
import "./styles/colors.scss";
import MainPage from "./app/pages/main-page";
import CartPage from "./app/pages/cart-page";
import store from "./app/store/store";

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
      {
        path: "",
        element: <Navigate to={"/pizza"} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/pizza"} replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
