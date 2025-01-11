import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import Blog from "../pages/blog";
import { Empty } from "antd";
import Karzinka from "../pages/karzinka";
import { SearchComponent } from "../pages/home/categories/cards/searchCardID";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Karzinka",
        element: <Karzinka />,
      },
      {
        path: "/search/:category/:id",
        element: <SearchComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <Empty />,
  },
]);
