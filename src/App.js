import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pos from './components/pos/Pos';
import Kds from './components/kds/Kds';
import Settings from './components/settings/Settings';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="pos/*" element={<Pos />} />
        <Route path="kds/*" element={<Kds />} />
        <Route path="settings/*" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
