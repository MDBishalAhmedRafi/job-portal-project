import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import CompanyDetails from "../Components/CompanyDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobData.json"),
      },
      {
        path: "/jobs",
        element: <Blog></Blog>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      { 
        path: "/company-details/:name",
        element: <CompanyDetails></CompanyDetails>,
        loader: () => fetch("/jobData.json"),
      },
      { 
        path: "/login",
        element: <LogIn></LogIn>,
      },
      { 
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
