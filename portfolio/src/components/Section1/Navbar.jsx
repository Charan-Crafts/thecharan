import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex px-4 sm:px-6 lg:px-10 items-center justify-between py-5 w-full relative'>
            {/* Logo */}
            <div className='flex-shrink-0'>
                <h1 className='font-extrabold text-2xl sm:text-3xl text-shadow-white cursor-pointer'>
                    <span className='text-3xl sm:text-4xl text-white hover:text-yellow-200'>C</span>
                    <span className='font-extralight text-white hover:text-white'>haran</span>
                </h1>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center justify-center flex-1 px-4'>
                <div className='flex space-x-8'>
                    <Link to="/" className='text-lg lg:text-2xl font-mono text-shadow-white text-white cursor-pointer hover:text-yellow-200 transition-colors'>Home</Link>
                    <button className='text-lg lg:text-2xl font-mono text-shadow-white text-white cursor-pointer hover:text-yellow-200 transition-colors'>About</button>
                    <Link to="/resume"className='text-lg lg:text-2xl font-mono text-shadow-white text-white cursor-pointer hover:text-yellow-200 transition-colors'>Resume</Link>
                </div>
            </div>

            {/* Desktop Social Links */}
            <div className='hidden md:flex items-center justify-end space-x-4 flex-shrink-0'>
                <a href="https://github.com/Charan-Crafts" target='_blank' rel="noopener noreferrer" className='text-white hover:text-yellow-200 transition-colors'>
                    <i className="ri-github-fill ri-xl"></i>
                </a>
                <a href="https://linkedin.com/in/thecharan" target="_blank" rel="noopener noreferrer" className='text-white hover:text-yellow-200 transition-colors'>
                    <i className="ri-linkedin-box-fill ri-xl"></i>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='text-white hover:text-yellow-200 transition-colors'
                >
                    <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line ri-2x`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden z-50'>
                    <div className='flex flex-col py-4 px-4 space-y-4'>
                        <button className='text-xl font-mono text-white hover:text-yellow-200 transition-colors text-left py-2'>Home</button>
                        <button className='text-xl font-mono text-white hover:text-yellow-200 transition-colors text-left py-2'>About</button>
                        <button className='text-xl font-mono text-white hover:text-yellow-200 transition-colors text-left py-2'>Resume</button>

                        {/* Mobile Social Links */}
                        <div className='flex space-x-6 pt-4 border-t border-gray-700'>
                            <a href="https://github.com/Charan-Crafts" target='_blank' rel="noopener noreferrer" className='text-white hover:text-yellow-200 transition-colors'>
                                <i className="ri-github-fill ri-xl"></i>
                            </a>
                            <a href="https://linkedin.com/in/thecharan" target="_blank" rel="noopener noreferrer" className='text-white hover:text-yellow-200 transition-colors'>
                                <i className="ri-linkedin-box-fill ri-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
