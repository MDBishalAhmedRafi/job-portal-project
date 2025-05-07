import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
                return (
                                <div className=''>
                                   <ToastContainer/>
                                                <header>
                                                                <Navbar></Navbar>
                                                </header>
                                                <main className=''>
                                                                
                                                                <Outlet></Outlet> 
                                                </main>
                                           <footer>
                                                <Footer></Footer>
                                           </footer>
                                </div>
                );
};

export default MainLayout;