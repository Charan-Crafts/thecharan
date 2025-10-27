import React from 'react';
import { useNavigate } from 'react-router-dom';
import resumePDF from '../assets/CHARAN M.pdf';

const Resumepage = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Charan_M_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        window.open(resumePDF, '_blank');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12'>
            <div className='w-full max-w-4xl mx-auto'>
                {/* Back to Home Button */}
                <div className='mb-8'>
                    <button
                        onClick={handleBackToHome}
                        className='bg-transparent border-2 border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105'
                    >
                        <i className="ri-arrow-left-line text-lg"></i>
                        Back to Home
                    </button>
                </div>

                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-4'>
                        My <span className='text-yellow-200'>Resume</span>
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-300 font-light max-w-2xl mx-auto'>
                        Download or view my complete professional profile showcasing my skills, experience, and achievements.
                    </p>
                </div>

                {/* Resume Card */}
                <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-700 hover:border-yellow-200/50 transition-all duration-300 shadow-2xl'>
                    {/* Resume Preview */}
                    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
                        {/* Left Side - Resume Icon/Preview */}
                        <div className='flex-shrink-0'>
                            <div className='w-32 h-40 sm:w-40 sm:h-52 lg:w-48 lg:h-60 bg-white rounded-lg shadow-lg flex items-center justify-center border-4 border-gray-300 hover:border-yellow-200 transition-colors duration-300'>
                                <div className='text-center'>
                                    <i className="ri-file-text-line text-4xl sm:text-5xl lg:text-6xl text-gray-700 mb-2"></i>
                                    <p className='text-xs sm:text-sm text-gray-600 font-medium'>PDF Resume</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className='flex-1 text-center lg:text-left'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4'>
                                Charan M
                            </h2>
                            <p className='text-lg sm:text-xl text-yellow-200 mb-6 font-medium'>
                                Full Stack Developer
                            </p>

                            {/* Resume Details */}
                            <div className='space-y-3 mb-8'>

                                <div className='flex items-center justify-center lg:justify-start gap-3'>
                                    <i className="ri-file-line text-yellow-200"></i>
                                    <span className='text-gray-300 text-sm sm:text-base'>Format: PDF Document</span>
                                </div>
                                <div className='flex items-center justify-center lg:justify-start gap-3'>
                                    <i className="ri-download-line text-yellow-200"></i>
                                    <span className='text-gray-300 text-sm sm:text-base'>Size: Optimized for viewing</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                                <button
                                    onClick={handleDownload}
                                    className='bg-yellow-200 hover:bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2'
                                >
                                    <i className="ri-download-2-line text-xl"></i>
                                    Download Resume
                                </button>

                                <button
                                    onClick={handleView}
                                    className='bg-transparent border-2 border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2'
                                >
                                    <i className="ri-eye-line text-xl"></i>
                                    View Online
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className='text-center mt-8'>
                    <p className='text-gray-400 text-sm sm:text-base'>
                        For any inquiries or collaboration opportunities, feel free to reach out through my contact information in the resume.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resumepage;
