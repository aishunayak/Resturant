import React from 'react';
import './Head.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order Your Favourite Food Here</h2>
        <p>Discover a variety of delicious dishes crafted with fresh ingredients. Whether you're in the mood for something classic or adventurous, our menu has something to satisfy every craving.</p>
        <button id='headbutton'>View Menu</button>

      </div>
    </div>
  );
}

export default Header;
