import React from 'react';

const Footer = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:mangalacharan27@gmail.com';
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+919182874288';
    };

    return (
        <div id="contact" className='w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-4'>
                        Get In <span className='text-yellow-200'>Touch</span>
                    </h2>
                    <p className='text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto'>
                        Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className='grid md:grid-cols-2 gap-8 mb-12'>
                    {/* Email Card */}
                    <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-200/50 transition-all duration-300 shadow-2xl group'>
                        <div className='text-center'>
                            <div className='mb-6'>
                                <i className="ri-mail-line text-5xl sm:text-6xl text-yellow-200 group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>Email</h3>
                            <p className='text-gray-300 mb-6 text-sm sm:text-base'>
                                Send me an email for collaborations, job opportunities, or general inquiries.
                            </p>
                            
                            <button
                                onClick={handleEmailClick}
                                className='bg-yellow-200 hover:bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto'
                            >
                                <i className="ri-mail-send-line text-xl"></i>
                                Send Email
                            </button>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-200/50 transition-all duration-300 shadow-2xl group'>
                        <div className='text-center'>
                            <div className='mb-6'>
                                <i className="ri-phone-line text-5xl sm:text-6xl text-yellow-200 group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>Contact</h3>
                            <p className='text-gray-300 mb-6 text-sm sm:text-base'>
                                Give me a call to discuss projects, opportunities, or technical discussions.
                            </p>
                            <div className='mb-6'>
                                <p className='text-yellow-200 font-medium text-lg sm:text-xl'>
                                    +91 9182874288
                                </p>
                            </div>
                            <button
                                onClick={handlePhoneClick}
                                className='bg-transparent border-2 border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto'
                            >
                                <i className="ri-phone-fill text-xl"></i>
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className='text-center mb-8'>
                    <h3 className='text-2xl sm:text-3xl font-semibold text-white mb-6'>Follow Me</h3>
                    <div className='flex justify-center space-x-6'>
                        <a
                            href="https://github.com/Charan-Crafts"
                            target='_blank'
                            rel="noopener noreferrer"
                            className='bg-gray-700 hover:bg-yellow-200 text-white hover:text-black p-4 rounded-full transition-all duration-300 transform hover:scale-110'
                        >
                            <i className="ri-github-fill text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/thecharan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-gray-700 hover:bg-yellow-200 text-white hover:text-black p-4 rounded-full transition-all duration-300 transform hover:scale-110'
                        >
                            <i className="ri-linkedin-box-fill text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='border-t border-gray-700 pt-8 text-center'>
                    <p className='text-gray-400 text-sm sm:text-base'>
                        © 2025 Charan All rights reserved.Crafted with passion and precision.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
