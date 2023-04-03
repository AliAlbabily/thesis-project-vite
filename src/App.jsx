import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './circle.css'

function App() {

  // const elem = document.getElementById("test");
  // elem.addEventListener('click', function() {
  //     console.log('You clicked the div!');
  // });


  return (
    <div className="App">

      {/* New Component */}
      <div className="outer">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
        <div className="mid">
          <div className="inner"></div>
        </div>
      </div>

    </div>
  )
}

export default App
