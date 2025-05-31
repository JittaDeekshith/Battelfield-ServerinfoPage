import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ActionButtons from './components/ActionButtons';
import ServerStats from './components/ServerStats';
import MapRotation from './components/MapRotation';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <p className="breadcrumb">>MULTIPLAYER / SERVER BROWSER /</p>
        <h1 className="server-title">SERVER INFO</h1>
        <p className="server-warning">🐦‍🔥 #1|NASA - Noobs Welcome|- Conquest - 40 HZ</p>
        <p className="server-description">
          Server protected by The_K-50 AntiCheat. Vip/Rules, Questions, Request, Appeal,
          Visit us: <a href="https://www.epg.gg" target="_blank" rel="noreferrer">www.epg.gg</a> |
          Discord <a href="https://discord.gg/3r5Nk4d" target="_blank" rel="noreferrer">https://discord.gg/3r5Nk4d</a>
        </p>

        <ActionButtons />
        <ServerStats />
        <MapRotation />
      </div>
    </div>
  );
}

export default App;
