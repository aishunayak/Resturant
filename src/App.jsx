import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import Register from './components/Register';
import Practice from './components/Practice/Practice';


const App = () => {
  
  
  return (
    <>
  
    <div className='app'>
     
       {/* { <Register/> } */}
     { <Navbar/> }
      
      <Routes>
       
       {/* { <Route path='/' element={<Home/>}/> } */}
       {<Route path='/practice' element={<Practice/>}/> }
       
      </Routes>
      {/* {<Menu/> } */}
    </div>
    </>
  );
}

export default App;
