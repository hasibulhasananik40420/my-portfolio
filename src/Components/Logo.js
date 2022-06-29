import React from 'react';
import Marquee from "react-fast-marquee";
const Logo = () => {
    return (
        <Marquee speed={75}>
            <div className=' hidden md:visible md:flex md:justify-center '>
                <div className='flex items-center gap-8'>
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo1.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo2.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo3.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo4.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo5.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo7.png?raw=true" alt="" />
                    <img src="https://github.com/akashyap2013/PortFolio_Website/blob/master/img/brands/logo9.png?raw=true" alt="" />

                </div>
            </div>
        </Marquee>
    );
};

export default Logo;