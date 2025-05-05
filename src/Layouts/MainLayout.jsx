import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
                return (
                                <div className='space-y-9'>
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