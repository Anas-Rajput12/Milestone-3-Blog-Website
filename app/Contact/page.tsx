'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 
import { FormEvent } from 'react'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submit handler
  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 bg-gray-300 py-12">
          <div className="max-w-3xl mx-auto p-5 bg-black rounded-lg shadow-lg">
            

            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-lg text-white mb-8">Feel free to reach out to us for any inquiries!</p>
              
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex gap-1 text-center">
                  <FaEnvelope className="text-3xl text-white mb-2" />
                  <p className='text-white'>Email: ardesigner109@gmail.com</p>
                </div>
                <div className="flex gap-1 text-center">

                  <FaPhoneAlt className="text-3xl text-white mb-2" />
                  <p className='text-white'>Phone: +92 316 4583774</p>
                </div>
                <div className="flex gap-1 text-center">
                  <FaMapMarkerAlt className="text-3xl text-white mb-2" />
                  <p className='text-white'>Address: Nawabshah, Sindh</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#040404]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#030303]"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#090909]"
                    placeholder="Your Message"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-black transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Contact;
