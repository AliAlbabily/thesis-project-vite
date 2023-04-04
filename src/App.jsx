import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './circle.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame1 from './frame1'
import Frame2 from './frame2';

function App() {


  return (
    <div className="App">
      <Router basename="/">
          <Routes>
              <Route path="/" element={<Frame1 />} />
              <Route path="/frame2" element={<Frame2 />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
