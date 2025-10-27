import React from 'react';

const Experience = () => {
    return (
        <div className='min-h-[50vh] w-full px-4 sm:px-6 lg:px-10 py-8'>
            <div className='w-full max-w-4xl mx-auto'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-serif text-yellow-200 text-center mb-8'>Experience</h1>

                <div className='bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-yellow-200/50 transition-all duration-300'>
                    <div className='space-y-4'>
                        <div>
                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2'>
                                Hysteresis –
                                <span className='text-yellow-300 ml-2'>Full Stack Developer Intern</span>
                            </h2>
                        </div>

                        <div className='border-l-4 border-yellow-200 pl-4 sm:pl-6'>
                            <p className='text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 font-light'>
                                Worked on building and optimizing web-based solutions while gaining hands-on experience in full-stack development. Collaborated with the team to improve performance, enhance user interfaces, and integrate modern technologies into real-world projects.
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-2 mt-6'>
                            <span className='px-3 py-1 bg-yellow-200/20 text-yellow-200 rounded-full text-xs sm:text-sm font-medium'>Full-Stack Development</span>
                           
                            <span className='px-3 py-1 bg-yellow-200/20 text-yellow-200 rounded-full text-xs sm:text-sm font-medium'>Modern Technologies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
