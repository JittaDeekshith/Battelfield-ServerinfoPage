import React from 'react';
import './ActionButtons.css';

function ActionButtons() {
  return (
    <div className="action-buttons">
      <button className="btn primary">JOIN</button>
      <button className="btn">SPECTATE</button>
      <button className="btn">JOIN AS COMMANDER</button>
      <div className="favorite">
        ★ 13672
      </div>
    </div>
  );
}

export default ActionButtons;
