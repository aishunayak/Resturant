import React, { useState } from 'react';
import './Navbar.css'




function Navbar({setregister}) {
  const [menu, setMenu] = useState("Menu");
 
   
  const overlay = ()=> {
       setregister("true")
  }
  
  return (
    <div className='navbar'>
      <img id='logo' src='Aishkit.png' alt=' ' />

      <ul className="navbar-menu">
        <li className={menu === "Home" ? "active activeMenu" : "activeMenu"}>Home</li>
        <li className={menu === "Menu" ? "active activeMenu" : "activeMenu"}>Menu</li>
        <li className={menu === "Gallary" ? "active activeMenu" : "activeMenu"}>Gallary</li>
        <li className={menu === "Contact us" ? "active activeMenu" : "activeMenu"}> Contact Us</li>
      </ul>
      <div className="nav-right">
        <img id='search' src={"/search-icon.png"} />
        <div className="cart">
          <img id='cart' src={"/cart.png"} />
          <div id="dot"></div>
        </div>

        <button id='signin' onClick={overlay}>  Sign In  </button>


      </div>

    </div>
  );
}

export default Navbar;