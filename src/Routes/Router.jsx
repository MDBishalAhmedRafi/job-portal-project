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
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPass from "../Pages/ForgetPass";
import UpdateProfile from "../Pages/UpdateProfile";

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
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      { 
        path: "/update-profile",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>,
        </PrivateRoute>
      },
      { 
        path: "/company-details/:name",
        element: <PrivateRoute>
          <CompanyDetails></CompanyDetails>
        </PrivateRoute>,
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
        element:<Register></Register>,
      },
      { 
        path:"/auth/forget-password",
        element:<ForgetPass></ForgetPass>,
      },
    ]
  }
]);

export default router;
