import React from 'react';
import { motion } from 'framer-motion';
import jobImage from "../assets/blog1.jpg";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-100 via-white to-green-100 py-20 overflow-hidden rounded-2xl">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Discover Your <span className="text-green-600">Next Opportunity</span>
            </h1>
            <p className="mt-6 text-gray-700 text-lg max-w-lg">
              Join thousands of professionals and find the job that fits your skills, values, and career goals.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <button className="bg-green-500 cursor-pointer hover:font-bold text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-green-700 transition">
                Browse Jobs
              </button>
            </div>
          </div>

          {/* Right Image with Animation */}
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={jobImage}
              alt="Job Hunt"
              className="w-full lg:mx-0 rounded-3xl shadow-xl"
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
