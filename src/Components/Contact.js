import React, { useRef } from 'react';
import logo1 from '../img/address.png'
import logo3 from '../img/email.png'
import logo4 from '../img/profile.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5v1wldx', 'template_ojpoawb', form.current, 'mPbJ3Q4CE29B08q33')
            .then((result) => {
                console.log(result.text);
                toast.success('Thanks for your Email')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mx-4 md:mx-16' id='contact'>
            <h1 id='hireme' className='text-3xl font-bold font-sans text-center'>Contact us</h1>
            <div className='flex items-center justify-center'>
                <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
                <p className='text-xl font-medium text-center font-serif text-red-600  px-4 '>Get in touch </p>
                <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
            </div>

            <div className=''>
                <div className=' md:flex md:justify-around'>
                    <div className='md:w-2/4'>
                        <h1 className=' text-xl md:text-2xl font-bold text-black'>Get in Touch</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                        <div className='flex items-center'>
                            <div> <img className='w-8' src={logo4} alt="" /></div>
                            <div className='ml-6'>
                                <h1 className='text-xl font-semibold'>Name</h1>
                                <p className=' '>Hasibul Hasan </p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div> <img className='w-8' src={logo1} alt="" /></div>
                            <div className='ml-6'>
                                <h1 className='text-xl font-semibold'>Address</h1>
                                <p className=' '>Natore, Rajshahi</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div> <img className='w-8' src={logo3} alt="" /></div>
                            <div className='ml-6'>
                                <h1 className='text-xl font-semibold'>Email</h1>
                                <p className=' '>Hasibulhasan40420@gmail.com</p>
                            </div>
                        </div>

                    </div>


                    <div className='md:w-2/4 md:ml-12'>
                        <h1 className='text-2xl font-bold text-black'>Message me </h1>


                        <form ref={form} onSubmit={sendEmail} className='mt-6'>
                            <div className='flex gap-4 mb-4'>
                                <input required name="user_name" className='w-full py-3 border border-gray-400 pl-3 rounded-md' type="text" placeholder='Name' />
                                <input required name="user_name" className='w-full py-3 border border-gray-400 pl-3 rounded-md' type="text" placeholder='Last Name' />

                            </div>
                            <input required name="user_email" className='w-full py-3 border border-gray-400 pl-3 rounded-md mb-4' type="email" placeholder='abc@gmail.com' />
                            <input required name="message" className='w-full py-6 border border-gray-400 pl-3 rounded-md' type="text" placeholder='Message' />

                            <input className=' px-10 py-3 font-medium rounded bg-[#F5C32C]  mt-6 cursor-pointer hover:border border-yellow-500 hover:bg-transparent ' type="submit" value="Send Message" />
                        </form>
                        <ToastContainer />
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Contact;