import React from 'react';
import Header from '../Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Logo from './Logo';
import MySkills from './MySkills';
import Navbar from './Navbar';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div >
            {/* <Navbar></Navbar> */}
             <Header></Header>
            <Logo></Logo>
            <AboutMe></AboutMe>
            <Services></Services>
            <MySkills></MySkills>
            <Projects></Projects>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;