import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import ss5 from '../Images/Screenshot_13.png'
import ss10 from '../Images/Screenshot_5.png'
import ss11 from '../Images/Screenshot_6.png'
import ss12 from '../Images/Screenshot_7.png'
import ss13 from '../Images/Screenshot_15.png'
import ss14 from '../Images/Screenshot_9.png'
import { Button, Modal } from 'antd';
const Projects = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    //modal 2

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal2 = () => {
        setVisible(true);
    };

    const handleOk2 = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel2 = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    // modal 3 ,4

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    //modal 5
    const [visibles, setVisibles] = useState(false);

    //modal 6

   

    return (


        <div className='md:mx-16 mt-24 mb-16 w-full overflow-hidden' id='project'>
            <h1 className='text-3xl font-bold font-serif text-center'>My Projects</h1>
            <div className='flex items-center justify-center'>
                <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
                <p className='text-xl font-medium text-center font-serif text-red-600  px-4'>What i did </p>
                <div className=' border border-black  bg-red-600 w-8 rounded-md mt-[-20px]'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>

                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="card md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss11} alt="Shoes" /></figure>
                    <h1 className='ml-3'>Professional Bicycle parts manufactorers website</h1>
                    <div class="card-actions justify-center mb-6 mt-2">
                        <div >

                            {/* <Button class="badge badge-outline cursor-pointer" type="primary" onClick={showModal}>
                                Details
                            </Button> */}
                            <button onClick={showModal} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                            <Modal title="Bicycle parts manufactorers website" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <figure><img src={ss11} alt="Shoes" /></figure>
                                <h1 className='ml-3 mb-2'>Professional Bicycle parts manufactorers website base on tailwind .
                                    Authorization and authorization Implementation.
                                    Connect Stripe Payment Method System with Card Payment.
                                    Admin and user inter Connection System.


                                </h1>

                                <a href="https://assignment-12-fe1d7.web.app/"> <button class="badge badge-outline cursor-pointer ml-2" > Live Site</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-client"><button class="badge badge-outline cursor-pointer ml-2" > Client Repository</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Bicycle-parts-manufacturers-server"> <button class="badge badge-outline cursor-pointer ml-2" > Server Repository</button> </a>

                            </Modal>
                        </div>
                    </div>

                </div>


                <div data-aos="zoom-in-left" class="card md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss12} alt="Shoes" /></figure>
                    <h1 className='ml-3'>Izmo Stock Inventory management website</h1>
                    <div class="card-actions justify-center mb-6 mt-2">

                        <div >

                            {/* <Button class="badge badge-outline cursor-pointer" type="primary" onClick={showModal2}>
                                Details
                            </Button> */}
                            <button onClick={showModal2} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                            <Modal
                                title="Izmo Stock Inventory management website"
                                visible={visible}
                                onOk={handleOk2}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel2}
                            >

                                <figure><img src={ss12} alt="Shoes" /></figure>
                                <h1 className='ml-3'>Izmo Stock Inventory management website
                                    Maintain Inventory Products & Protected.
                                    Api security with JWT token System Implementation.
                                    Express.js , CRUD Operation Implementation.
                                </h1>

                                <a href="https://assginment-11.web.app/"> <button class="badge badge-outline cursor-pointer ml-2" > Live Site</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-client"><button class="badge badge-outline cursor-pointer ml-2" > Client Repository</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-server"> <button class="badge badge-outline cursor-pointer ml-2" > Server Repository</button> </a>

                            </Modal>

                        </div>
                    </div>
                </div>




                <div  data-aos="zoom-in-up" class="card md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss13} alt="Shoes" /></figure>
                    <h1 className='ml-3'>Desgin agency service provider website</h1>
                    <div class="card-actions justify-center mb-6 mt-2">
                        <div>

                            {/* <Button type="primary" onClick={() => setModal2Visible(true)}>
                                Details
                            </Button> */}
                            <button onClick={() => setModal2Visible(true)} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                            <Modal
                                title="Desgin agency service provider website"
                                centered
                                visible={modal2Visible}
                                onOk={() => setModal2Visible(false)}
                                onCancel={() => setModal2Visible(false)}
                            >
                                 <figure><img src={ss13} alt="Shoes" /></figure>
                                  <h1 className='ml-3'>Desgin agency service provider website
                                  Authorization and authorization Implementation
                                  Admin and user inter Connection system
                                   Connect Stripe Payment Method system with card payment.
                                  </h1>
                                  <a href="https://desgin-agency.web.app/"> <button class="badge badge-outline cursor-pointer ml-2" > Live Site</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency"><button class="badge badge-outline cursor-pointer ml-2" > Client Repository</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency-server"> <button class="badge badge-outline cursor-pointer ml-2" > Server Repository</button> </a>

                            </Modal>
                        </div>
                    </div>
                </div>



                <div  data-aos="fade-up"
     data-aos-anchor-placement="top-center" class="card md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss14} alt="Shoes" /></figure>
                    <h1 className='ml-3'>Traditional Barbar Shop Booking Service Website</h1>
                    <div class="card-actions justify-center mb-6 mt-2">
                        <div>


                            {/* <Button type="primary" onClick={() => setModal1Visible(true)}>
                                Details
                            </Button> */}
                            <button onClick={() => setModal1Visible(true)} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                            <Modal
                                title="Traditional Barbar Shop Booking Service Website"
                                style={{ top: 20 }}
                                visible={modal1Visible}
                                onOk={() => setModal1Visible(false)}
                                onCancel={() => setModal1Visible(false)}
                            >
                                 <figure><img src={ss14} alt="Shoes" /></figure>
                                 <h1 className='ml-3'>Traditional Barbar Shop website
                                 Implement Authorization and authorization on Firebase.
                                 User If he/she want to book service . It's a professional service center.
                    
                                 </h1>
                                 <a href="https://assignment-10-48fb0.web.app/"> <button class="badge badge-outline cursor-pointer ml-2" > Live Site</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-client"><button class="badge badge-outline cursor-pointer ml-2" > Client Repository</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/Izmo-stock-server"> <button class="badge badge-outline cursor-pointer ml-2" > Server Repository</button> </a>

                                  
                            </Modal>

                        </div>
                    </div>
                </div>

                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="card w-full md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss5} alt="Shoes" /></figure>
                    <h1 className='ml-3'>Professional photography website . 
                    
                    </h1>
                    <div class="card-actions justify-center mb-6 mt-2">
                        <div>

                             {/* <Button onClick={() => setVisibles(true)} type="primary" >

                                Details
                            </Button> */}

                             <button onClick={() => setVisibles(true)} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                            <Modal
                                title="Professional photography website"
                                centered
                                visible={visibles}
                                onOk={() => setVisibles(false)}
                                onCancel={() => setVisibles(false)}
                                width={500}
                            >
                                <figure><img src={ss5} alt="Shoes" /></figure>
                                <h1 className='ml-3'>Professional photography website</h1>
                                <a href="https://nifty-yalow-7a0aac.netlify.app/"> <button class="badge badge-outline cursor-pointer ml-2" > Live Site</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency"><button class="badge badge-outline cursor-pointer ml-2" > Client Repository</button> </a>
                                <a href="https://github.com/hasibulhasananik40420/desgin-agency-server"> <button class="badge badge-outline cursor-pointer ml-2" > Server Repository</button> </a>

                            </Modal>

                        </div>
                    </div>
                </div>


                <div data-aos="fade-up"
     data-aos-duration="3000" class="card w-full md:w-96 bg-base-100 shadow-md">
                    <figure><img src={ss10} alt="Shoes" /></figure>
                    <h1 className='ml-3'>The mobile planet website </h1>
                    <div class="card-actions justify-center mb-6 mt-2">
                        <div className=''>

                        {/* https://agitated-heisenberg-275ee3.netlify.app/ */}
{/* 
                        <Button type="primary">
                                Details
                            </Button> */}
                            <button onClick={() => setVisibles(true)} className='text-blue-500 border border-blue-500 px-8 py-2 font-semibold  hover:bg-transparent hover:bg-blue-500 hover:text-white animate-pulse'> Details</button>

                        </div>
                    </div>
                </div>




            </div>


        </div>

    );
};

export default Projects;