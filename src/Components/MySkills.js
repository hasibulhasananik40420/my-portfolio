import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css'
const MySkills = () => {
    return (
        <div className='mt-24 md:mx-20 mx-4 ' id='skill'>
            <h1 className='text-3xl font-bold font-serif text-center text-black'>My Skills</h1>
            <div className='flex items-center justify-center'>
            <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
                <p className='text-xl font-medium text-center font-serif text-red-600 px-4'>What i know </p>
                <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>

            </div>

            <div className='md:flex md:justify-between mb-6 mt-16'>
                <div className='md:w-2/4'>
                    <h1 className='text-2xl font-bold mb-3'>My creative skills & experiences.</h1>
                    <p>As a developer i have some skills . I know well HTML5, CSS3, Javascript , React , Tailwind , Bootstrap , Noje js Firebase ,Mongodb and many others. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                    {/* <button className=' px-10 py-3 font-bold rounded bg-[#F5C32C]  mt-5 hover:border border-yellow-500 hover:bg-transparent '>Read More</button> */}


                        <button className='buttonmodal btn2'>read more</button>
                        {/* <button className='buttonmodal btn2'>hover</button> */}
                </div>

                <div className='mt-12 md:mt-4 md:w-2/4 md:ml-16'>

                    <div>
                        <span className='font-bold'>HTML</span>
                        <Progress
                            strokeColor={{
                                '0%': '#DC143C',
                                '100%': '#DC143C',
                            }}
                            percent={95}
                        /> 
                       
                    </div>

                    <div className='mt-3'>
                    <span className='font-bold mt-3'>CSS</span>
                        <Progress
                            strokeColor={{
                                '0%': '#DC143C',
                                '100%': '#DC143C',
                            }}
                            percent={90}
                        />
                    </div>

                    <div className='mt-3'>
                    <span className='font-bold mt-3'>Javascript</span>
                        <Progress
                            strokeColor={{
                                '0%': '#DC143C',
                                '100%': '#DC143C',
                            }}
                            percent={75}
                        />
                    </div>

                    <div className='mt-3'>
                    <span className='font-bold mt-3'>React</span>
                        <Progress
                            strokeColor={{
                                '0%': '#DC143C',
                                '100%': '#DC143C',
                            }}
                            percent={65}
                        />
                    </div>

                    <div className='mt-3'>
                    <span className='font-bold mt-3'>Node Js</span>
                        <Progress
                            strokeColor={{
                                '0%': '#DC143C',
                                '100%': '#DC143C',
                            }}
                            percent={55}
                        />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MySkills;