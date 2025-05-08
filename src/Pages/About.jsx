import React from 'react';
import image1 from "../assets/1920-x-1080-Images-1.webp"
import image2 from "../assets/shutterstock_1687550977-696x464.jpg"
import avater1 from "../assets/avater1.jpg"
import avater2 from "../assets/avater2.jpg"
import avater3 from "../assets/avater3.jpg"
const About = () => {
                return (
                                <>
                                <div className='lg:w-11/12 lg:mx-auto mx-2 bg-gradient-to-r from-blue-200 via-green to-purple-100 mb-5'>
                                <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                {/* <!-- Left Images --> */}
                                <div className="grid grid-cols-2 gap-4">
                                  <img src={image1} alt="People talking" className="cursor-pointer hover:scale-120 rounded-lg w-full h-auto object-cover"></img>
                                  <img src={image2} alt="Team meeting" className="hover:scale-120 hover:opacity-100 cursor-pointer rounded-lg w-full h-auto object-cover"></img>
                                </div>
                              
                                {/* <!-- Right Content --> */}
                                <div>
                                  <p className="text-green-600 font-semibold">// About Finate</p>
                                  <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                                    Finate help your for get your dream job and build your bright career.
                                  </h2>
                                  <p className="text-gray-600 mb-6">
                                    It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. The point of using is that has more-or-less normal a distribution of letters, as opposed to using 'Content publishing packages web page editors.'
                                  </p>
                              
                                  {/* <!-- Avatars and Button --> */}
                                  <div className="flex items-center gap-4">
                                    {/* <!-- Avatars --> */}
                                    <div className="flex lg:-space-x-3">
                                      <img className="w-10 h-10 rounded-full border-2 border-white" src={avater1} alt="User 1"></img>
                                      <img className="w-10 h-10 rounded-full border-2 border-white" src={avater2} alt="User 2"></img>
                                      <img className="w-10 h-10 rounded-full border-2 border-white" src={avater3} alt="User 3"></img>
                                      <div classname="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold border-2 border-white">+</div>
                                    </div>
                              
                                    {/* <!-- Join Now Button --> */}
                                    <button className="bg-green-500 text-white px-5 py-2 rounded-lg  transition hover:bg-green-800 cursor-pointer hover:font-bold">
                                      + Join Now
                                    </button>
                                  </div>
                                </div>
                              </section>
                              </div>
                                </>
                );
};

export default About;