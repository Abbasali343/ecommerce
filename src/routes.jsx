import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";

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
    path: "/signup",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Home />,
  },
]);

export default router;
