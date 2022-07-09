import React from 'react';
import icon1 from './image/linkedin.png'
import icon2 from './image/github.png'
import icon3 from './image/instagram.png'
import shape from './image/shape-bg.png'
import banner from './image/bg.jpg'



const Header = () => {
  return (
    <div id='nav' style={{
      background: `url(${banner})`
    }} className='w-full overflow-hidden '>
      <div className=' mt-6 md:flex md:justify-between md:items-center md:mt-16 md:mx-12 mx-6'>
        <div className='w-full md:w-2/4'>
          <h1 className='font-bold md:text-5xl text-2xl text-[#FCA61F] font-serif mb-4'>Hy ! I Am</h1>
          <p className='font-bold md:text-5xl text-2xl text-[#FCA61F] font-serif'>Hasibul Hasan</p>
          <p className='text-[#fbfcfd] mt-4 text-xsm mb-6'>To gain confidence and fame using my potential in this position, and express my innovative creative
            skills for self and company growth. I’m a hardworking and quick learner. I believe hard work is the
            only way to success. Love to learn new technology and try to improve myself.</p>


          <button><a href='#hireme' className='btn px-10 py-3 btn-outline btn-warning '>Hire Me</a></button>


          <div className='flex gap-8 mt-8  cursor-pointer'>
            <a href="https://www.linkedin.com/in/hasibul-hasan-06a987229/"> <img className='h-[40px] w-[40px]' src={icon1} alt="" /></a>
            <a href="https://github.com/hasibulhasananik40420"> <img className='h-[40px] w-[40px]' src={icon2} alt="" /></a>
            <a href="https://www.instagram.com/hasibulhasan40420/"> <img className='h-[40px] w-[40px]' src={icon3} alt="" /></a>
          </div>
        </div>

        <div className=' md:mb-32 mb-12'>
          {/* <img src={man3} class="w-[300px] md:w-full mt-12 max-w-sm md:mr-4 " alt=''/> */}
          <img class="w-[300px] md:w-full mt-12 max-w-sm md:mr-4 " src="https://anyforsoft.com/static/a2da834e20a93f2114281a1174296b58/17.gif" alt="" />
        </div>

      </div>


      <div>
        <img className='' src={shape} alt="" />
      </div>
    </div>
  );
};

export default Header;