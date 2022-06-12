import './App.css';
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
function App() {
  
  useEffect( ()=>{
    AOS.init();
  },[])

  return (
    <div className='w-full overflow-hidden'>
       <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs />} />
        
      </Routes>
    </div>
  );
}

export default App;
