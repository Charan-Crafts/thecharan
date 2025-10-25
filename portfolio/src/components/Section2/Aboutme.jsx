import React from 'react';
import Coding from '../../assets/Coding.jpg'
const Aboutme = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center '>
      <div className=' w-3/4 h-full'>
        <h2 className='text-center text-3xl font-serif text-yellow-200'>About me</h2>
        <hr className='text-white mt-3 font-extralight' />
        <div className=' h-full w-full flex items-center'> 
          <div className=' h-3/4 w-1/2 p-1'>
            <img src={Coding} alt="" className=' h-full w-10/12 rounded-4xl' />
          </div>
          <div className='bg-red h-full w-1/2  px-4'> 
            <div>
              <h1 className='font-serif text-xl text-black'>Hi There ! I'm<span className='text-white'> Charan </span></h1>

              <span className='text-3xl font-semibold text-yellow-200'>Full stack Developer</span>

              <p className='text-left px-2 leading-normal font-extralight text-shadow-white text-white'>
                passionate about building innovative, user-friendly applications. I work across the MERN stack, Spring Boot microservices, Python, Java, and Docker, while constantly exploring AI/ML possibilities. As a fresher, I'm driven by my love for coding and creating impactful solutions. Let's build something amazing together!"
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-semibold text-yellow-300'>Experience</h2>
              <h2 className='px-2 py-1 font-extralight text-white'>Full-stack Developer Intern <span className='font-extrabold text-black'>|</span> <span className='text-yellow-300 text-xl'>Hysteresis Pvt Ltd</span></h2>
              <h2 className='px-2 font-extralight text-amber-300'>Mar 2025 - Aug 2025</h2>

              <ul className='px-2 font-extralight text-white'>
                <li >
                  Built an AI-powered Interview Bot to help students prepare for technical and HR interviews, including company-specific Versant rounds.

                </li>
                <li>
                  Implemented automation and conversational systems using LangChain, n8n, and Docker.
                </li>
              </ul>


              <h2 className='text-3xl font-semibold py-1 text-yellow-300'>Tech Stack</h2>

              <p className='px-3 font-extralight text-white '>React, Node.js, MongoDB, Docker, AWS (S3, EC2), LangChain, n8n
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
