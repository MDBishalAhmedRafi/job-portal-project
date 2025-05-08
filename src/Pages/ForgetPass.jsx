import React, { use, useRef, } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation } from 'react-router';

const ForgetPass = () => {
                const location = useLocation();
                console.log(location) 
                 const {forgetPass} =use(AuthContext);
                 const emailRef = useRef();
                 const handleForgetPass = (e) => { 
                                e.preventDefault()
                                const email = emailRef.current.value;
                                console.log(email)
                                forgetPass(email)
                                .then(() => {
                                  alert("password reset email is sent")
                                  // ..
                                })
                                .catch((error) => {
                                  const errorCode = error.code;
                                  alert(errorCode)
                                  // ..
                                });
                              }
                return (
                                <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
                                  <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
                                    Forgot Password
                                  </h2>
                          
                                  <form onSubmit={handleForgetPass}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Email address
                                    </label>
                                    <input
                                      type="email"
                                      ref={emailRef}
                                      defaultValue={location.state.email}
                                      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="you@example.com"
                                      
                                    />
                          
                                    <button
                                    
                                      type="submit"
                                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                                    >
                                      Reset Password
                                    </button>
                                  </form>
                                </div>
                              </div>
                );
};

export default ForgetPass;