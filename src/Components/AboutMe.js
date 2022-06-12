import React from 'react';
import anik from '../img/about-us.png'
import resume from '../Images/Hasibul Hasan_Resume (3).pdf'
import Typical from 'react-typical'
const AboutMe = () => {
    return (
        <div className='mt-16 mb-8 w-full overflow-hidden ' id='about'>
            <h1 className='text-3xl font-bold font-serif text-center text-black'>About me</h1>
            <div className='flex items-center justify-center'>
                <div className=' border border-black  bg-black w-8 rounded-md mt-[-20px]'></div>
                <p className='text-xl font-medium text-center font-serif text-red-600 px-4'>Who i am </p>
                <div className=' border border-black  bg-black w-8 rounded-md mt-[-20px]'></div>

            </div>


            <div className='md:flex md:items-center md:mx-16 mx-4'>

                <div className='md:w-2/4 md:ml-16'>
                    {/* <img className='md:w-[370px] md:h-[450px]' src={anik} alt="" /> */}
                    <img className='md:w-[370px] md:h-[450px]' src="https://www.venuexplorer.com.sg/uploads/Working%20in%20progresss.gif" alt="" />

                </div>

                <div className='md:w-2/4 md:mr-16'>
                    <h1 className='text-2xl md:text-3xl  font-medium mb-1'> I'm Hasibul and I'm a


                        <Typical className='text-red-600 font-serif'

                            steps={[
                                "Ethusiastic Dev ",
                                2000,
                                "Full Stack Developer",
                                2000,
                                "Mern Stack Dev",
                                2000,
                                "Cross Platform ",
                                2000,
                                "React / React native Dev",
                                2000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />

                    </h1>
                    <p className='font-normal '>

                        I'm Hasibul and I'm a developer To gain confidence and fame using my potential in this position, and express my innovative creative
                        skills for self and company growth. I’m a hardworking and quick learner. I believe hard work is the
                        only way to success. Love to learn new technology and try to improve myself.
                        ratione soluta quas culpa voluptatum repudiandae harum non.
                    </p>
                    <a href={resume} download>
                        <button className=' px-10 py-3 font-bold rounded bg-[#F5C32C] text-black mt-6 hover:border border-yellow-500 hover:bg-transparent '>Download CV</button>
                    </a>

                </div>

            </div>

        </div>
    );
};

export default AboutMe;