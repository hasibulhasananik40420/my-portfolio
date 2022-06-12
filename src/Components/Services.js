import React from 'react';
import logo1 from '../image/content.png'
import logo2 from '../image/coding (1).png'
import logo3 from '../image/coding (2).png'
import logo4 from '../image/no.png'
import Marquee from "react-fast-marquee";
const Services = () => {
    return (
        <div id='service' className='w-full overflow-hidden mt-12 mb-16 bg-[#111] md:py-24 md:px-16 px-8 py-12'>
            <h1 className='text-3xl font-bold font-serif text-center text-white'>My Services</h1>
            <div className='flex items-center justify-center'>
                <div className=' border border-red-600  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
                <p className='text-xl font-medium text-center font-serif text-red-400  px-4'>What i provide </p>
                  <div className=' border border-red-600  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
            </div>
          
             <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-8'>
             <div  data-aos="zoom-out-right" className=' p-8 text-center bg-[#222] hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                   <img className='w-12 mx-auto' src={logo3} alt="" />
                    <h1 className='text-xl font-bold text-white mt-2'>Web Development</h1>
                    <p className=' text-white mt-1 mb-10 rounded-sm'>It uses a dictionary of over 200 Latin words, combined witha handful of model sentence.</p>
               </div>
               {/* </Marquee> */}
               <div data-aos="zoom-out-left" className=' p-8 text-center bg-[#222] hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out'>
                   <img className='w-12 mx-auto' src={logo2} alt="" />
                   <h1 className='text-xl font-bold text-white mt-2'>Advertising</h1>
                    <p className=' text-white mt-1 mb-10 rounded-sm'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
               </div>
               <div data-aos="zoom-in-down" className='bg-[#222] p-8 text-center hover:bg-red-500 hover:text-white hover:duration-500 ease-in-out '>
                   <img className='w-12 mx-auto' src={logo4} alt="" />
                   <h1 className='text-xl font-bold text-white mt-2'>Business Stratagy</h1>
                    <p className=' text-white mt-1 mb-10 rounded-sm'>I throw myself down among the tall grass by the stream as I lie close to the earth .</p>
               </div>


             </div>
           


        </div>
    );
};

export default Services;