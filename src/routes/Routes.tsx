import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import ContactDetails from "../pages/ContactDetails";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes - identificador unico - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - navigate para pages nao existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);
