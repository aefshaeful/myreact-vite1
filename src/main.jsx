import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Provider } from "react-redux";
import store from "./store";


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
  //   path: "/details/:id",
  //   element: <DetailPage />,
  // },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
