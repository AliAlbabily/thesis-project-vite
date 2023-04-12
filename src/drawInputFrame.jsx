import React, { useRef } from 'react';

import './assets/css/drawInputFrame.css';
import Button from '@mui/material/Button';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
    border: '0.0625rem solid #9c9c9c'
};

function DrawInputFrame() {
    const canvasRef = useRef(null);

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
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }}
                    >
                    Get Image
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