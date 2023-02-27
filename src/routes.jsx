import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import AdminNavbar from "./layout/AdminNavbar";
import AdminProducts from "./Pages/AdminProducts";
import AdminProfile from "./Pages/AdminProfile";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
  {
    path:"/admin",
    element:<AdminNavbar />,
    children:[
      {
        index:true,
        element:<AdminProfile />
      },
      {
        path:"/admin/products",
        element:<AdminProducts />
      },
      {
        path:"/admin/orders",
        element:<Orders />
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
