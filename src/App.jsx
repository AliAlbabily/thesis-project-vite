
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Frame1 from './frame1'
import Frame2 from './frame2';
import TextInputFrame from './textInputFrame';
import DrawInputFrame from './drawInputFrame';
import ResultFrame from './resultFrame';

function App() {

  return (
    <div className="App">
    <Router basename="/thesis-project-vite">
          <Routes>
              <Route path="/" element={<Frame1 />} />
              <Route path="/frame2" element={<Frame2 />} />
              <Route path="/textinputframe" element={<TextInputFrame />} />
              <Route path="/drawinputframe" element={<DrawInputFrame />} />
              <Route path= "/resultFrame" element ={<ResultFrame/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
