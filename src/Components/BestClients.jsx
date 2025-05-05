import React from "react";
import { FaStar } from "react-icons/fa";
import client1 from ".././assets/images (1).jpg"
import client2 from ".././assets/images (2).jpg"
import client3 from ".././assets/images (3).jpg"
import client4 from ".././assets/girl1.jpg"
import client5 from ".././assets/girl2..jpg"
const BestClients = () => {
  return (
    <div className="lg:w-11/12 lg:mx-auto bg-[#2eba6e] lg:p-4 p-2 rounded-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Our Happy Clients</h1>
        <p className="text-gray-600 mb-7 text-center">
          They are proudly said that they are preety much happy with our services
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-5 grid-cols-1 gap-5 lg:p-4 p-2">
                {/* card 01 */}

      <div className="bg-white shadow lg:p-4 p-2 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img className='w-10 h-10 rounded-2xl' src={client1} alt="" />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold lg:text-xl">David R</h2>
            <p className="font-bold lg:text-xl">CEO</p>
          </div>
        </div>
        <div>
          <p>
            "Working with this company was a game-changer for us. Their
            attention to detail and commitment to excellence exceeded our
            expectations. Highly recommended!"
          </p>
          <div className="flex lg:gap-2 gap-1">
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          </div>
        </div>
      </div>
      {/* card 02 */}

      <div className="bg-white shadow lg:p-4 p-2 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img className='w-10 h-10 rounded-2xl' src={client2} alt="" />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold lg:text-xl">Michael T</h2>
            <p className="font-bold lg:text-xl">Marketing Director</p>
          </div>
        </div>
        <div>
          <p>
          "From start to finish, the team was responsive, skilled, and truly cared about our success. We’ve seen amazing results and will definitely work with them again!"
          </p>
          <div className="flex lg:gap-2 gap-1">
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          </div>
        </div>
      </div>

      {/* card 03 */}
      <div className="bg-white shadow lg:p-4 p-3 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img className='w-10 h-10 rounded-2xl' src={client3} alt="" />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold lg:text-xl">Sanjay K</h2>
            <p className="font-bold lg:text-xl">Business Owner</p>
          </div>
        </div>
        <div>
          <p>
          "Working with this company was a game-changer for us. Their attention to detail and commitment to excellence exceeded our expectations. Highly recommended!"
          </p>
          <div className="flex lg:gap-2 gap-1">
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          </div>
        </div>
      </div>

      {/* card 04 */}
      <div className="bg-white shadow lg:p-4 p-3 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img className='w-10 h-10 rounded-2xl' src={client4} alt="" />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold lg:text-xl">Priya L.</h2>
            <p className="font-bold lg:text-xl">Startup Founder</p>
          </div>
        </div>
        <div>
          <p>
          "I was blown away by the quality of service. They delivered on time, within budget, and with a level of professionalism that’s hard to find. 10/10!"
          </p>
          <div className="flex lg:gap-2 gap-1">
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          </div>
        </div>
      </div>

      {/* card 05 */}
      <div className="bg-white shadow lg:p-4 p-3 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img className='w-10 h-10 rounded-2xl' src={client5} alt="" />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold lg:text-xl">Emily S.</h2>
            <p className="font-bold lg:text-xl">Project Manager</p>
          </div>
        </div>
        <div>
          <p>
          "Fantastic experience from day one! The team was friendly, knowledgeable, and delivered beyond what we imagined. Will be coming back for sure!"
          </p>
          <div className="flex lg:gap-2 gap-1">
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          <FaStar className="text-[#fa9604]"></FaStar>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BestClients;
