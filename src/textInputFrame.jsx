
import React, { useState, useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';

import BIRDS from 'vanta/dist/vanta.fog.min';
import * as THREE from "three";


function TextInputFrame() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
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
    return ( 
        <div style={{width: "100%", height: "100%"}}>
            
            <div ref={myRef}>
                
                <TextField
                    variant="outlined"
                    placeholder="Write your thoughts here !"
                    multiline
                    minRows={5}
                    maxRows={10}
                    style={{width: "280px"}}
                />
            </div>

        </div>
    );
}

export default TextInputFrame;
