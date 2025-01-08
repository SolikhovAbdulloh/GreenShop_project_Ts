import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import Blog from "../pages/blog";
import { Empty } from "antd";

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
    ],
  },
  {
    path: "*",
    element: <Empty />,
  },
]);
