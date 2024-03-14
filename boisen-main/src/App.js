import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Messages from './Messages';
import Home from './Home';
import Login from './Login';
import Ammatilliset from './studies/Ammatilliset';
import Announcements from './Announcements';
import MessageOpen from './messageopen';
import Testcoming from './Testcoming';
import Testpast from './Testpast';
import Schedule from './Schedule';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/kirjautuminen" element={<Login />} />
  <Route path="/etusivu" element={<Home />} />
  <Route path="/tiedotteet" element={<Announcements />} />
  <Route path="/viestiauki" element={<MessageOpen />} />
  <Route path="/viestit" element={<Messages />} />
  <Route path="/Testcoming" element={<Testcoming />} />
  <Route path="/Testpast" element={<Testpast />} />
  <Route path="/tyojarjestys" element={<Schedule />} />
  <Route path="/opinnot" element={<Navigate to="/opinnot/ammatilliset" replace />} />
  <Route path="/opinnot/ammatilliset" element={<Ammatilliset />} />
  <Route path="/" element={<Navigate to="/kirjautuminen" />} />
</Routes>

    </Router>
  );
}

export default App;
