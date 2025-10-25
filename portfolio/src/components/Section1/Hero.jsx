import React from 'react';

const Hero = () => {
    return (
        <div className='h-[60vh] w-full mt-3 flex items-center justify-center p-3 px-4 sm:px-6 lg:px-8'>
            <div className='h-full w-full sm:w-3/4 lg:w-2/4 p-3 flex items-center flex-col justify-around'>
                <div className='text-center'>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white'>Hi, I'am </span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-yellow-200'>Charan</span>
                </div>
                <div className='text-sm sm:text-base md:text-lg lg:text-xl px-3 font-extralight text-white'>
                    <p className='leading-loose gap-2 text-center'>A passionate and dedicated web developer, driven by the ever-<br className='hidden sm:block' />evolving world of technology and its limitless possibilities.</p>
                    <p className='px-2 sm:px-4 md:px-6 lg:px-8 mt-3 text-center'>I'am Passionate Coder | Learner | Exploring AI & Beyond</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
