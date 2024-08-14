import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <div className='mainMenu'>
      <h1>Our Menu</h1>
      <p id='mainMenu-text'>Satisfy your cravings with our delicious, freshly prepared dishes. Choose from a variety of options that everyone will love</p>
      <div className="mainMenu-list">
        <div id='menu-item'></div>
        <div id='menu-item'></div>
        <div id='menu-item'></div>
        <div id='menu-item'></div>
         <div id='menu-item'></div>
      </div>
    </div>
  );
}

export default Menu;
