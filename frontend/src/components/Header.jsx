import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Ocean View Resort</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button className="btn">Book Now</button>
    </header>
  );
};

export default Header;
