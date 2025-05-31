import React from 'react';
import './ServerStats.css';

const ServerStats = () => {
  return (
    <div className="server-stats">
      <div className="stats-column">
        <p>PLAYERS: 64/64</p>
        <p>PING: <span className="green">47ms</span></p>
        <p>TICKRATE: 60Hz</p>
      </div>

      <div className="stats-column">
        <h4>SETTINGS</h4>
        <p>REGION: Europe - DE</p>
        <p>PUNKBUSTER: ON</p>
        <p>FAIRFIGHT: ON</p>
        <p>PASSWORD: OFF</p>
        <p>PRESET: NORMAL</p>
        <h4>ADVANCED</h4>
        <p>MINIMAP: ON</p>
        <p>ONLY SQUAD LEADER SPAWN: OFF</p>
        <p>VEHICLES: ON</p>
        <p>TEAM BALANCE: ON</p>
        <p>MINIMAP SPOTTING: ON</p>
        <p>HUD: ON</p>
        <p>3D VEHICLE CAM: ON</p>
        <p>REGENERATIVE HEALTH: ON</p>
        <p>KILL CAM: ON</p>
        <p>FRIENDLY FIRE: OFF</p>
        <p>3D SPOTTING: ON</p>
        <p>ENEMY NAME TAGS: ON</p>
      </div>

      <div className="stats-column">
        <h4>RULES</h4>
        <p><span className="yellow">TICKETS: 400</span></p>
        <p><span className="yellow">VEHICLE SPAWN DELAY: 25</span></p>
        <p>BULLET DAMAGE: 100</p>
        <p>KICK AFTER TEAM KILLS: 5</p>
        <p>PLAYER HEALTH: 100</p>
        <p>PLAYER RESPAWN TIME: 100</p>
        <p>KICK AFTER IDLE: 300</p>
        <p>BAN AFTER KICKS: 3</p>
      </div>
    </div>
  );
};

export default ServerStats;
