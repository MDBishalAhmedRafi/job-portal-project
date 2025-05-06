import React from 'react';
import Hero from '../Components/Hero';
import HowSection from '../Components/HowSection';
import CompanySection from '../Components/CompanySection';
import BestClients from '../Components/BestClients';
import Success from '../Components/Success';
import { useLoaderData } from 'react-router';

const Home = () => {
        const data = useLoaderData();
        console.log(data);
                return (
                                <div className='lg:w-11/12 lg:mx-auto mx-2 space-y-10'>
                                        <Hero></Hero>  
                                        <HowSection></HowSection>

                                        <section>
                                        <CompanySection companies = {data}></CompanySection>
                                        </section>

                                        <BestClients></BestClients>
                                        <Success></Success>
                                </div>
                );
};

export default Home;