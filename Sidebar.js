import React from 'react';
import './components/Sidebar';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-list">
        <img src="/assets/game1.png" alt="Game 1" />
        <img src="/assets/game2.png" alt="Game 2" />
        <img src="/assets/game3.png" alt="Game 3" />
        <img src="/assets/game4.png" alt="Game 4" />
        <img src="/assets/game5.png" alt="Game 5" />
      </div>

      <div className="menu-buttons">
        <button className="play-btn">▶</button>
        <button className="menu-btn">☰</button>
      </div>

      <div className="help-icon">?</div>
    </div>
  );
};

export default Sidebar;
