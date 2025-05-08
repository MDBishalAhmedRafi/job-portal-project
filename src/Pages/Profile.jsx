import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
  const {user} = use(AuthContext)
                return (
                                <div>

<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6 lg:w-11/12 lg:mx-auto mx-2 rounded-2xl">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center border border-gray-200">
        <div className="relative inline-block">
          <img
            className="w-28 h-28 rounded-full mx-auto border-4 border-blue-400 shadow-lg"
            src={user.photoURL}
            alt="User avatar"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 15a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.displayName}</h2>
        <p className="text-gray-500 mb-6">{user.email}</p>
                  <Link to="/update-profile">
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition duration-200">
          Update Profile
        </button>
        </Link>
      </div>
    </div>
                                </div>
                );
};

export default Profile;