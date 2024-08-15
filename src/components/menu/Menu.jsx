import React from 'react';
import './Menu.css'
import dessert from '../../assets/dessert.jpg'
import drinks from '../../assets/drinks.jpg'
import chinese from '../../assets/chiness.jpg'
import northindian from '../../assets/northIndian.jpg'
import southindian from '../../assets/southIndian.jpg'
import thali from '../../assets/thali.jpg'
import bakery from '../../assets/bakery.jpg'
import bread from '../../assets/breaditems.jpg'


const images = [
  { src: thali, name: 'Thali' },
  { src: northindian, name: 'North Indian' },
  { src: southindian, name: 'South Indian' },
  { src: chinese, name: 'Chinese' },
  { src: dessert, name: 'Dessert' },
  { src: bakery, name: 'Bakery' },
  { src: bread, name: 'Bread Items' },
  { src: drinks, name: 'Drinks' },
];
const Menu = () => {
  
  return (
    <div className='mainMenu'>
      <h1>Our Menu</h1>
      <p id='mainMenu-text'>Satisfy your cravings with our delicious, freshly prepared dishes. Choose from a variety of options that everyone will love</p>
     
      <div className="food">
      {images.map((image, index) => (
        <div key={index} className="food-item">
          <img src={image.src} alt={image.name} />
          <p className="image-name">{image.name}</p>
        </div>
      ))}
    </div>

      </div>
    
  );
}

export default Menu;
