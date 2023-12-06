import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children: [
    //   {
    //     index: true,
    //     element: <ProductPage />,
    //   },
    //   {
    //     path: "/detail/:id",
    //     element: <DetailPage />,
    //   },
    //   {
    //     path: "/checkout",
    //     element: <CheckoutPage />,
    //   },
    // ],
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  // {
  //   path: "/detail/:id",
  //   element: <DetailPage />,
  // },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
