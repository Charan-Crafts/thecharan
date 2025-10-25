import React from 'react';
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
    return (
        <div className='flex px-10 items-center justify-between py-5 w-full'>
            <div className='w-2/12'>
                <h1 className='font-extrabold text-3xl text-shadow-white cursor-pointer '>
                    <span className='text-4xl text-white  hover:text-yellow-200 '>C</span>
                    <span className='font-extralight text-white hover:text-white'>haran</span> </h1>
            </div>
            <div className='w-6/12 flex align-items-center justify-around px-4'>
                <button className='text-2xl font-mono text-shadow-white text-white cursor-pointer hover:text-yellow-200'>Home</button>
                <button className='text-2xl font-mono text-shadow-white text-white cursor-pointer  hover:text-yellow-200'>About</button>
                <button className='text-2xl font-mono text-shadow-white text-white cursor-pointer  hover:text-yellow-200'>Resume</button>
            </div>
            <div className='flex items-center justify-evenly w-3/12 '>
                <a href="https://github.com/Charan-Crafts" target='_blank' rel="noopener noreferrer" className='text-white  hover:text-yellow-200'>
                    <i class="ri-github-fill ri-xl"></i>
                </a>
                <a
                    href="https://linkedin.com/in/thecharan"
                    target="_blank"
                    rel="noopener noreferrer" className='text-white  hover:text-yellow-200'
                >
                    {/* <i class="ri-linkedin-fill ri-xl"></i> */}
                    <i class="ri-linkedin-box-fill ri-xl"></i>
                </a>
            </div>

        </div>
    );
}

export default Navbar;
