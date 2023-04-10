import './textInputFrame.css'
import React, { useState, useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

import BIRDS from 'vanta/dist/vanta.fog.min';
import * as THREE from "three";

const useStyles = makeStyles(theme => ({
    textField: {
     // width: '100%', // Set the width to 100% to make it responsive
      [theme.breakpoints.up('sm')]: {
        width: '50%', // Set the width to 50% for screens wider than 600px
      },
      [theme.breakpoints.up('md')]: {
        width: '30%', // Set the width to 30% for screens wider than 960px
      },
    },
  }));

function TextInputFrame() {
    const classes = useStyles();

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
        <div id = "genBackground">
            
            <div id= "vantaCloud"ref={myRef} style={{height: "100vh"}}
>
                <h1>Free your mind!</h1>
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    placeholder="Write your thoughts here !"
                    multiline
                    minRows={5}
                    maxRows={10}
                  //  style={{maxWidth: "800px", minWidth: "240px", minHeight: "800px", maxHeight:"800px"}}
                />

                        <Button id = "submitButton"variant="contained" size="large">
                        Submit
                        </Button>

            </div>

        </div>
    );
}

export default TextInputFrame;
