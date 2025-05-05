import React from 'react';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const ContactUs = () => {
                return (
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
              80/A Shajalal Complex Malibagh Square Dhaka-1217
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* form part */}

    <div className="contact-form-container">
      <h2 className="form-title">Get in Touch</h2>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            className="form-input"
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            className="form-input"
            placeholder="Your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            className="form-input"
            placeholder="Subject"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            className="form-input textarea"
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>

                                </div>
                );
};

export default ContactUs;