import React, { useRef } from 'react';

import './css/drawInputFrame.css';
import Button from '@mui/material/Button';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useNavigate } from "react-router-dom";


const styles = {
    border: '0.0625rem solid #9c9c9c'
};

function DrawInputFrame() {
    const canvasRef = useRef(null);
    const navigate = useNavigate()

    function switchComponent(drawingData) {
        navigate("../resultFrame", { state: { drawingSrc: drawingData } })
    }

    function loadThoughts() {
        let jsonThoughts = localStorage.getItem("thoughts");

        if(jsonThoughts == null) {
            localStorage.setItem("thoughts", JSON.stringify([]));
            return [];
        } else {
            return JSON.parse(jsonThoughts);
        }
    }

    function saveNewThought(thoughts, imageSrc) {
        thoughts.push({
            input: imageSrc,
            inputType: "image"
        })

        let jsonThoughts = JSON.stringify(thoughts);
        localStorage.setItem("thoughts", jsonThoughts);
    }

    return ( 
        <div id="drawContainer">
            <h1>Awaken your imagination !</h1>

            <ReactSketchCanvas
                style={styles}
                width="80vw"
                height="80vh"
                strokeWidth={4}
                strokeColor="black"
                ref={canvasRef}
            />

            <div id="drawButtonsContainer">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        canvasRef.current
                            .exportImage("png")
                            .then(data => {
                                console.log(data);
                                const thoughts = loadThoughts()
                                saveNewThought(thoughts, data)
                                switchComponent(data)
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }}
                    >
                    Submit
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => { canvasRef.current.clearCanvas()} }>
                    Clear drawing
                </Button>
            </div>
        </div>
    );
}



export default DrawInputFrame;