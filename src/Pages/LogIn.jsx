import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const {logIn, googleLogIn} = use(AuthContext);
  const navigate = useNavigate()
  const handleLogin = (e) => { 
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
    .then ((result) => { 
      const user = result.user;
      console.log(user);
      navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
  }

  const handleGoogleLog = () => { 
    googleLogIn()
    .then(result => { 
      console.log(result)
      navigate("/")
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
  }
  return (
    <div className="lg:w-11/12 lg:mx-auto mx-s">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center rounded-2xl">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login Your Account
          </h2>
          <div className="border-b border-gray-300 mt-2 mb-6 relative">
            <div className="absolute left-1/2 -bottom-[1px] transform -translate-x-1/2 w-16 h-[2px] bg-green-500" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div className="space-y-3">
              <button type="button" onClick={handleGoogleLog} className="btn btn-outline btn-secondary w-full">
                <FcGoogle size={24} />
                Login With Google
              </button>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition font-bold"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t you have an account?{" "}
            <Link to="/auth/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
