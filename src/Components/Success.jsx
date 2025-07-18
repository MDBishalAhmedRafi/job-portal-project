import React from "react";
import CountUp from "react-countup";
const Success = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-200 via-blue to-purple-100 rounded-2xl mb-5 lg:p-3">
      <div className="text-center lg:mt-10 m-2 space-y-3">
        <h1 className="font-extrabold text-[#0F0F0F] lg:text-3xl text-2xl">
          We Provide Best Job Portals
        </h1>
        <p className="text-[#0F0F0F] font-normal lg:text-[14px] text-[10px]">
          Our platform connects you with verified, experienced Jobs across
          various specialities — all at your convenience.{" "}
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around lg:mx-0 mx-30 mt-5">
        <div className="w-30 h-30 bg-gradient-to-r from-purple-200 via-red to-blue-100 rounded-xl  items-center  shadow-sm border border-gray-400 p-5 pt-7">
          
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <CountUp end={199} duration={5} suffix="+"></CountUp>+
          </div>
          <div className="text-sm text-gray-600 font-bold">Total Clients</div>
        </div>
        <div className="w-30 h-30 bg-gradient-to-r from-purple-200 via-red to-blue-100 rounded-xl  items-center  shadow-sm border border-gray-400 p-5 pt-7">
          
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <CountUp end={450} duration={6} suffix="+"></CountUp>+
          </div>
          <div className="text-sm text-gray-600 font-bold">Total Review</div>
        </div>
        <div className="w-30 h-30 bg-gradient-to-r from-purple-200 via-red to-blue-100 rounded-xl  items-center  shadow-sm border border-gray-400 p-5 pt-7">
          
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <CountUp end={700} duration={7} suffix="+"></CountUp>+
          </div>
          <div className="text-sm text-gray-600 font-bold">Job Placement</div>
        </div>
        <div className="w-30 h-30 bg-gradient-to-r from-purple-200 via-red to-blue-100 rounded-xl  items-center  shadow-sm border border-gray-400 p-5 pt-7">
    
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <CountUp end={300} duration={6} suffix="+"></CountUp>+
          </div>
          <div className="text-sm text-gray-600 font-bold">Team Members</div>
        </div>
      </div>
    </div>
  );
};

export default Success;
