import './css/textInputFrame.css'
import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import BIRDS from 'vanta/dist/vanta.fog.min';
import * as THREE from "three";

function TextInputFrame() {
    const navigate = useNavigate()
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    const inputRef = useRef("");

    function switchComponent(inputText) {
      navigate("../resultFrame" , { state: { text: inputText } })
    }

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                // minHeight: 200.00,
                // minWidth: 200.00,
                highlightColor: 0xffffff,
                midtoneColor: 0x3279d2,
                lowlightColor: 0x958eb6,
                baseColor: 0xffffff
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    function loadThoughts() {
      let jsonThoughts = localStorage.getItem("thoughts");

      if(jsonThoughts == null) {
        localStorage.setItem("thoughts", JSON.stringify([]));
        return [];
      } else {
        return JSON.parse(jsonThoughts);
      }
    }

    function saveNewThought(thoughts) {
      thoughts.push({
          input: inputRef.current.value,
          inputType: "text"
      })

      let jsonThoughts = JSON.stringify(thoughts);
      localStorage.setItem("thoughts", jsonThoughts);
    }
    
    return ( 
        <div id ="genBackground">
            
            <div id= "vantaCloud"ref={myRef} style={{height: "100vh"}}>
                <h1>Express yourself by writing!</h1>
                <TextField
                    inputRef={inputRef}
                    style={{width: '50vw'}}
                    variant="outlined"
                    placeholder="Write your thoughts, feelings and ideas here!"
                    multiline
                    minRows={5}
                    maxRows={10}
                />
                <Button id ="submitButton" variant="contained" size="large" 
                  onClick={() => {
                    console.log(inputRef.current.value);
                    const thoughts = loadThoughts()
                    saveNewThought(thoughts)
                    alert("You have successfully submitted your self-expression!")
                    switchComponent(inputRef.current.value);
                  }}
                >
                  Submit
                </Button>
            </div>

        </div>
    );
}

export default TextInputFrame;
