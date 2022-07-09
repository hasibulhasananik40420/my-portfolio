import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../Images/Hasibul Hasan_Resume (3).pdf'
import banner from '../image/bg.jpg'

const Navbar2 = () => {
  return (
    <div class="navbar w-full  " style={{
      background: `url(${banner})`
    }}>
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            <li><Link className='font-bold' to='/'>Home</Link></li>
            <li><a href='/#about'>About</a></li>
            <li><a href='/#service'>Services</a></li>
            <li><a href='/#skill'>Skills</a></li>
            <li><a href='/#project'>Projects</a></li>
            <li><a href='/#contact'>Contact</a></li>
            <li><Link to='/blogs' >Blogs</Link></li>
            <li><a href={resume} download className='btn btn-outline btn-warning'>Resume</a></li>

          </ul>
        </div>
        <a class=" text-3xl font-mono ml-12">Hasi<span className='text-3xl text-[#F5C32C] font-mono'>bul_</span> </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 ">

          <li><Link className='font-bold' to='/'>Home</Link></li>
          <li><a href='/#about' className='font-bold'>About</a></li>
          <li><a href='/#service' className=' font-bold'>Services</a></li>
          <li><a href='/#skill' className=' font-bold'>Skills</a></li>
          <li><a href='/#project' className=' font-bold'>Projects</a></li>
          <li><a href='/#contact' className=' font-bold'>Contact</a></li>
          <li><Link to='/blogs' className=' font-bold' >Blogs</Link></li>
          <li><a href={resume} download className='btn btn-outline btn-warning'>Resume</a></li>


        </ul>
      </div>

    </div>
  );
};

export default Navbar2;