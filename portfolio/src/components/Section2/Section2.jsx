import React from 'react';
import background from "../../assets/Background2.jpg"
import Aboutme from './Aboutme';
import WhatICanDo from './WhatICanDo';
import Experience from './Experience'
const Section2 = () => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <Aboutme></Aboutme>
            <Experience/>
            <WhatICanDo></WhatICanDo>
        
        </div>
    );
}

export default Section2;
