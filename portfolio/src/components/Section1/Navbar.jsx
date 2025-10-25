import React from 'react';
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
    return (
        <div className='flex px-10 align-items-center justify-between py-5 w-full'>
            <div className='w-2/12'>
                <h1 className='font-extrabold text-3xl text-shadow-white'>
                    <span className='text-4xl text-white'>C</span>
                    <span className='font-extralight text-white'>haran</span> </h1>
            </div>
            <div className='w-6/12 flex align-items-center justify-evenly'>
                <button className='text-2xl font-mono text-shadow-white text-white'>Home</button>
                <button className='text-2xl font-mono text-shadow-white text-white'>About</button>
                <button className='text-2xl font-mono text-shadow-white text-white'>Resume</button>
            </div>
            <div className='flex items-center justify-evenly w-4/12 '>
                <a href="https://github.com/Charan-Crafts" target='_blank' rel="noopener noreferrer" className='text-white'>
                    <i class="ri-github-fill ri-xl"></i>
                </a>
                <a
                    href="https://linkedin.com/in/thecharan"
                    target="_blank"
                    rel="noopener noreferrer" className='text-white'
                >
                    {/* <i class="ri-linkedin-fill ri-xl"></i> */}
                    <i class="ri-linkedin-box-fill ri-xl"></i>
                </a>
            </div>

        </div>
    );
}

export default Navbar;
