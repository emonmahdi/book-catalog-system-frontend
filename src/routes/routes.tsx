import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Books from "../components/Books";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
