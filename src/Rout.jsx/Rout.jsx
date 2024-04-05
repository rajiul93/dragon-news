import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import NewsDetails from "../Page/NewsDetails/NewsDetails";
import Registration from "../Page/Registration.jsx/Registration";
import Root from "../Page/Root.jsx/Root";
import PrivetOutlet from "../PrivetOutlet/PrivetOutlet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/news-details/:id",
        element: <PrivetOutlet><NewsDetails /></PrivetOutlet>,
      },
    ],
  },
]);
