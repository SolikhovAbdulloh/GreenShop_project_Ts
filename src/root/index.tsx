import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import Blog from "../pages/blog";
import { Empty } from "antd";
import Karzinka from "../pages/karzinka";
import { SearchComponent } from "../pages/home/categories/cards/searchCardID";
import Product_chekout from "../pages/navbar/product_checkout";
import User_comments_blog from "../pages/blog/Usercomments";
import Profile from "../components/profile";

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
      {
        path: "/product-checkout",
        element: <Product_chekout />,
      },
      {
        path: "/blog/:id/:user_id",
        element: <User_comments_blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Empty />,
  },
]);
