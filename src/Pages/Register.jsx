import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const Register = () => {

  const {createUser, setUser, googleLogIn, updateUser} = use(AuthContext);
  const [passError, setPassError] = useState("")
  const handleRegister = (e) => { 
    e.preventDefault();
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const photo = form.photo.value
    const password = form.password.value
    console.log({name, email, photo, password});
    if (!hasUppercase.test(password)) {
      setPassError("password Should has a UpperCase");
      return;
    }
    else{ setPassError("")}
    if (!hasLowercase.test(password)) {
      setPassError("password Should has a LowerCase");
      return;
    }
    else{ setPassError("")}
    if (password.length < 6) {
      setPassError("password Should be more than 6 character");
      return;
    }
    else{ setPassError("")}
    createUser(email, password)
    .then(result=>{ 
      const user = result.user
      updateUser({displayName: name, photoURL: photo}).then(() => { 
        setUser({...user, displayName: name, photoURL: photo});
      })
      .catch((error) => {
        alert(error);
        setUser(user);
      });
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode,errorMessage)
      // ..
    });
  };

  const handleGoogle = () => { 
    googleLogIn()
    .then(result => { 
      console.log(result)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode)
    });
  }

  return (
    <div className="lg:w-11/12 lg:mx-auto mx-s">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center rounded-2xl">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Register Your Account
          </h2>
          <div className="border-b border-gray-300 mt-2 mb-6 relative">
            <div className="absolute left-1/2 -bottom-[1px] transform -translate-x-1/2 w-16 h-[2px] bg-green-500" />
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
                {/* name */}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
                {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* photo */}
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* password */}
            <input
              type="password"
              name="password"
              placeholder="Type Your Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
             <div className="space-y-3">
              <button type="button" onClick={handleGoogle} className="btn btn-outline btn-secondary w-full">
                <FcGoogle size={24} />
                Register With Google
              </button>
            </div>
            {passError && <p className="text-red-500">{passError}</p>}
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition font-bold"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Do you have an account?{" "}
            <Link to="/auth/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
