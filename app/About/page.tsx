
import React from 'react';
import Image from 'next/image'; // Image import

const About = () => {
  return (
    <>
      <div className='bg-gray-300'>
      <div className="max-w-5xl mx-auto p-5 ">
        {/* About Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
          <p className="text-2xl text-black">Welcome to our blog! We share insights on various topics to inspire and inform.</p>
        </div>

        {/* About Content Section */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {/* Left Side Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden min-h-[300px]">
            <Image
              src="/img 2.jpg"
              height={300}
              width={300}
              alt="About Image"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right Side Text Section */}
          <div className="  flex items-center justify-center bg-black text-white p-6 rounded-lg min-h-[300px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-sm mb-6">
                We are passionate bloggers who aim to share knowledge, inspire creativity, and provide valuable resources to our readers.
                Our mission is to make information accessible and engaging for everyone.
              </p>
              <p className="text-sm">
                Join us on our journey as we explore new topics, share helpful tips, and dive deep into the world of blogging and content creation.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section */}
        <div className="mt-16 p-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            What Makes Us Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                Authentic Content
              </h3>
              <p className="text-gray-600">
                Real, relatable, and thoroughly researched content for value-driven insights.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Skilled writers bringing expertise and passion to every post.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Engaging content tailored to resonate with our audience.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                Evolving and exploring trends to keep content fresh and relevant.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
