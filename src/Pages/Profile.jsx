import React from 'react';

const Profile = () => {
                return (
                                <div>
                                      Profile page

                                      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Top circle with image */}
      <div className="relative bg-cyan-700 h-28">
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
          <img
            className="h-28 w-28 rounded-full border-4 border-white object-cover"
            src="https://via.placeholder.com/150" // Replace with real image URL
            alt="Profile"
          />
        </div>
      </div>

      {/* Card content */}
      <div className="mt-16 px-6 pb-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">AARON LOEB</h2>
        <p className="text-sm text-gray-500">Graphic Designer</p>

        <div className="mt-4">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow-md transition duration-200">
            PROFILE
          </button>
        </div>

        {/* Details */}
        <div className="mt-6 text-left text-sm space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Gender:</span>
            <span>Male</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Age:</span>
            <span>35</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Address:</span>
            <span className="text-right">123 Anywhere St., Any City</span>
          </div>
        </div>
      </div>
    </div>      
                                </div>
                );
};

export default Profile;