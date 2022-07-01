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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navigate to={'pos/'} />} />
        <Route path="pos/" element={<Pos />} />
        <Route path="kds" element={<Kds />} />
      </Routes>
    </div>
  );
}

export default App;
