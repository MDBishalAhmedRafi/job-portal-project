import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to send the message here

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
                return (
                                <>
                                <div className='bg-gray-100 lg:w-11/12 lg:mx-auto mx-2 rounded-2xl'>

<div className=" p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded shadow">
            <FiPhone className="text-green-600 text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Call Us:</h4>
            <p className="text-sm text-gray-600">+880 131 555 2748</p>
            <p className="text-sm text-gray-600">+880 151 837 1336</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded shadow">
            <FiMail className="text-green-600 text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Email:</h4>
            <p className="text-sm text-gray-600">mdbishalahmedrafi55@gmail.com</p>
            <p className="text-sm text-gray-600">mdbishalahmedrafi36@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded shadow">
            <FiMapPin className="text-green-600 text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Address:</h4>
            <p className="text-sm text-gray-600">
              80/A Shahjalal Complex Malibagh Square Dhaka-1217
            </p>
          </div>
        </div>
      </div>
    </div>
     </div>
        {/* form part */}

    <div className="lg:max-w-md lg:mx-auto p-6 bg-gray-100 rounded-2xl shadow-sm lg:mt-10 mt-5 mx-2">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get in Touch</h2>
      <div className="w-10 h-1 bg-green-600 mb-6"></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name:"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email:"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject:"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
                                </>
                );
};

export default ContactUs;