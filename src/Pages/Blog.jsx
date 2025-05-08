import React from 'react';
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
const Blog = () => {
                return (
                                <div className='lg:w-11/12 lg:mx-auto mx-2 lg:space-y-8 space-y-5 mb-5'>

{/* blog 01 */}
<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-green-200 via-blue to-purple-100">
      {/* Image with Date Badge */}
      <div className="relative lg:p-3">
        <img
          src={blog1} // Update with actual image path
          alt="Discussion"
          className="w-full h-64 bg-cover bg-center rounded-2xl"
        />
        <div className="absolute top-57 left-4 bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-semibold text-center shadow-lg">
          <p className="leading-tight">
            <span className="block text-lg">02</span>
            <span className="text-xs">March</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 mt-5 rounded-2xl">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span>📄 03 Comments</span>
          <span>👤 Mr. Jack Frank</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
          To Make Your Smartness &amp; Catch Your Bright Dream.
        </h2>

        {/* Description */}
        <p className="text-gray-600">
          To make yourself smart and catch your bright dream, it involves a
          combination of factors that contribute to overall personal growth and
          success. These include continuous learning, exercising your brain,
          developing good habits, maintaining a positive attitude, support.
        </p>
      </div>
    </div>
 {/* blog 02 */}
<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-green-200 via-blue to-purple-100">
      {/* Image with Date Badge */}
      <div className="relative lg:p-3">
        <img
          src={blog2} // Update with actual image path
          alt="Discussion"
          className="w-full h-64 bg-cover bg-center rounded-2xl"
        />
        <div className="absolute top-57 left-4 bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-semibold text-center shadow-lg">
          <p className="leading-tight">
            <span className="block text-lg">04</span>
            <span className="text-xs">March</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 mt-5 rounded-2xl">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span>📄 05 Comments</span>
          <span>👤 Mr. Michel</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
        How To Improve Your Interview Question & Easy Answering Step By Step.
        </h2>

        {/* Description */}
        <p className="text-gray-600">
        To make yourself smart and catch your bright dream, it involves a combination of factors that contribute to overall personal growth and success. These include continuous learning, exercising your brain, developing good habits, maintaining a positive attitude,support.
        </p>
      </div>
    </div>
    {/* blog 03 */}
<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-green-200 via-blue to-purple-100">
      {/* Image with Date Badge */}
      <div className="relative lg:p-3">
        <img
          src={blog3} // Update with actual image path
          alt="Discussion"
          className="w-full h-64 bg-cover bg-center rounded-2xl"
        />
        <div className="absolute top-57 left-4 bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-semibold text-center shadow-lg">
          <p className="leading-tight">
            <span className="block text-lg">02</span>
            <span className="text-xs">March</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 mt-5 ">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span>📄 07 Comments</span>
          <span>👤 Jhon Doe</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
        How To Be Confident When Your Job Viva In Online, You Get To Know.
        </h2>

        {/* Description */}
        <p className="text-gray-600">
        To make yourself smart and catch your bright dream, it involves a combination of factors that contribute to overall personal growth and success. These include continuous learning, exercising your brain, developing good habits, maintaining a positive attitude,support.
        </p>
      </div>
    </div>

                                </div>
                );
};

export default Blog;