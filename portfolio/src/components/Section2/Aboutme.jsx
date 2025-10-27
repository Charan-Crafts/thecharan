import React from 'react';
import Coding from '../../assets/Coding.jpg'
const Aboutme = () => {
  return (
    <div id="about" className='min-h-[90vh] w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8'>
      <div className='w-full sm:w-11/12 lg:w-3/4 h-full'>
        <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-serif text-yellow-200 mb-4'>About me</h2>
        <hr className='text-white mt-3 font-extralight' />
        <div className='h-full w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0 mt-8'>
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-start p-1'>
            <img src={Coding} alt="Coding" className='h-64 sm:h-80 lg:h-3/4 w-full max-w-md lg:w-10/12 object-cover rounded-2xl lg:rounded-4xl' />
          </div>
          <div className='w-full lg:w-1/2 px-4 lg:px-4 space-y-4 lg:space-y-6'>
            <div className='text-center lg:text-left'>
              <h1 className='font-serif text-lg sm:text-xl lg:text-2xl text-black mb-2'>Hi There ! I'm<span className='text-white'> Charan </span></h1>

              <span className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-200 block mb-4'>Full stack Developer</span>

              <p className='text-left px-2 leading-relaxed font-extralight text-shadow-white text-white text-sm sm:text-base lg:text-lg'>
                passionate about building innovative, user-friendly applications. I work across the MERN stack, Spring Boot microservices, Python, Java, and Docker, while constantly exploring AI/ML possibilities. As a fresher, I'm driven by my love for coding and creating impactful solutions. Let's build something amazing together!"
              </p>
            </div>
            <div className='text-center lg:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-300 mb-3'>Experience</h2>
              <h2 className='px-2 py-1 font-extralight text-white text-sm sm:text-base lg:text-lg'>Full-stack Developer Intern <span className='font-extrabold text-black'>|</span> <span className='text-yellow-300 text-base sm:text-lg lg:text-xl'>Hysteresis Pvt Ltd</span></h2>
              <h2 className='px-2 font-extralight text-amber-300 text-sm sm:text-base mb-3'>Mar 2025 - Aug 2025</h2>

              <ul className='px-2 font-extralight text-white text-sm sm:text-base lg:text-lg space-y-2'>
                <li>
                  Built an AI-powered Interview Bot to help students prepare for technical and HR interviews, including company-specific Versant rounds.
                </li>
                <li>
                  Implemented automation and conversational systems using LangChain, n8n, and Docker.
                </li>
              </ul>

              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold py-1 text-yellow-300 mt-6 mb-3'>Tech Stack</h2>

              <p className='px-3 font-extralight text-white text-sm sm:text-base lg:text-lg'>React, Node.js, MongoDB, Spring-boot,Microservices,Docker, AWS (S3, EC2), LangChain, n8n.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
