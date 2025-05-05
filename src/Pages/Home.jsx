import React from 'react';
import Hero from '../Components/Hero';
import HowSection from '../Components/HowSection';
import CompanySection from '../Components/CompanySection';
import BestClients from '../Components/BestClients';
import Success from '../Components/Success';

const Home = () => {
                return (
                                <div className='lg:w-11/12 lg:mx-auto mx-2 space-y-10'>
                                        <Hero></Hero>  
                                        <HowSection></HowSection>
                                        <CompanySection></CompanySection>
                                        <BestClients></BestClients>
                                        <Success></Success>
                                </div>
                );
};

export default Home;