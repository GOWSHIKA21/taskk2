import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navlinks from "./components/Navlinks"
import Login from './pages/Login'
import MarksEntry from './pages/MarksEntry'

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>  
    <Navlinks />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/marks" element={<MarksEntry />} />
      </Routes>
      </div>
  );
}

export default App;