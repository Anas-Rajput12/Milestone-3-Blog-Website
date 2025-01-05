import {
    BsEnvelopeFill as BsGmail,
    BsLinkedin,
    BsGithub,
  } from "react-icons/bs";
  import { AiOutlineCopyrightCircle } from "react-icons/ai";
  
  const Footer = () => {
    return (
      <div className="w-full py-10 bg-gray-700 text-white/80 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
          {/* Logo */}
          <div className="flex font-bold text-3xl">
            <h1>
              Blog <span className="text-black">Website</span>
            </h1>
          </div>
  
          {/* Copyright Text */}
          <div className="text-center mt-4 md:mt-0">
            <p className="flex items-center justify-center text-sm font-titleFont gap-1">
              <AiOutlineCopyrightCircle className="mt-[1px]" />
              Blog Website || All rights reserved
            </p>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-6">
            {/* Gmail */}
            <a
              href="mailto:muhammadanasqadri2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGmail className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            </a>
  
            {/* GitHub */}
            <a
              href="https://github.com/Anas-Rajput12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            </a>
  
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  