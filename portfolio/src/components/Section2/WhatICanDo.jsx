import React from 'react';
import Marquee from "react-fast-marquee";
import Mern from '../../assets/Mern.png'; // ✅ import your image
import Springboot from '../../assets/Springboot.png'

import Docker from '../../assets/Docker.png'

import Microservice from '../../assets/Microservice.png'
import Github from '../../assets/Github.png'

import n8n from '../../assets/n8n.png'

const WhatICanDo = () => {
    const images = [Mern, Springboot, Docker, Microservice, Github, n8n];

    return (
        <div className="min-h-[60vh] w-full px-4 sm:px-6 lg:px-10 py-5">
            <div className="w-full h-1/4 flex items-center justify-center mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white text-center">Skills</h1>
            </div>

            {/* Marquee example */}
            <Marquee pauseOnHover={true} speed={60} gradient={false} className="mt-6 sm:mt-8 lg:mt-10">
                {images.map((img, index) => (
                    <div key={index} className="mx-4 sm:mx-6 lg:mx-8">
                        <img
                            src={img}
                            alt={`skill-${index}`}
                            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto hover:scale-110 transition-transform duration-300 rounded-full"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default WhatICanDo;
