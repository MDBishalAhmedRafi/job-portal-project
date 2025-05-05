import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
                {
                                path: "/",
                                element: <MainLayout></MainLayout>,
                                children: [ 
                                                {
                                                                path: "/",
                                                                element: <Home></Home>
                                                },
                                                {
                                                                path: "/jobs",
                                                                element: <h2>jobs Layout</h2>
                                                },
                                                {
                                                                path: "/About",
                                                                element: <h2>About page</h2>
                                                },
                                                {
                                                                path: "/contact-us",
                                                                element: <h2>Contact Us</h2>
                                                },
                                ]
                                
                },
                
                

])

export default router;