import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "shop/product/:sku",
        element: <SingleProduct />,
      },
    ],
  },
]);
