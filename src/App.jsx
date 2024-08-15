import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import Register from './components/Register';
import Practice from './components/Practice/Practice';
import { useState } from 'react';


const App = () => {
  const  [signin, setsignin] = useState(false);
  
  return (
    <>
     {signin?<Register/>:<></>}
    <div className='app'>
     
       {/* { <Register/> } */}
     { <Navbar showSignin={setsignin}/> }
      
      <Routes>
       
       { <Route path='/' element={<Home/>}/> }
       {/* {<Route path='/practice' element={<Practice/>}/> } */}
       
      </Routes>
      {<Menu/> }
    </div>
    </>
  );
}

export default App;
