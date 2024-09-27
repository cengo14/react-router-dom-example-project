import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";
import Category from "./pages/Category";
import Layout from "./pages/Layout";
import axios from "axios";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      return res.data;
    },
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cars", element: <Cars /> },
      { path: "/cars/details/:id", element: <Detail /> },
      {
        path: "/categories",
        element: <Category />,
        children: [
          { path: "hikaye", element: <h1>Hikaye</h1> },
          { path: "roman", element: <h1>Roman</h1> },
        ],
      },
      { path: "/cars/*", element: <Undefined /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
