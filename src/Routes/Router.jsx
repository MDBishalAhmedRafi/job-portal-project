import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import CompanyDetails from "../Components/CompanyDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/profile-page",
        element: <Profile></Profile>
      },
      { 
        path: "/company-details/:name",
        element: <CompanyDetails></CompanyDetails>,
        loader: () => fetch("/jobData.json"),
      },
    ],
  },
  { 
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children: [ 
      { 
        path:"/auth/login",
        element:<LogIn></LogIn>,
      },
      { 
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  }
]);

export default router;
