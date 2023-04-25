import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './css/frame2.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import drawImage from './emojisFeelings/Draw.png';
import typeInImage from './emojisFeelings/TypeIn.png';

function Frame2() {
    // const [emojiName, setEmojiName] = useState("") 

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const navigate = useNavigate()
    const location = useLocation(); // get the current location object
    const { emojiName } = location.state; // access the state object passed from the previous component

    function switchToTextInputFrame() {
        navigate("/textinputframe")
    }

    function switchToDrawInputFrame() {
        navigate("/drawinputframe")
    }

    return ( 
        <Box style={{ padding: '50px' }}>
            <h1 className="frame2-header">Looks like your are feeling {emojiName} today. How would you like to express yourself? </h1>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 3 }} style={{display: 'flex', justifyContent: 'center'}}>

                <Grid item xs={5}>
                    <Item onClick={() => switchToDrawInputFrame() } className="input-Item">
                        <img src={drawImage} alt="image" style={{ maxWidth: '150px', height: 'auto', width: '100%' }} />
                        <p className="input-type">Draw</p>
                    </Item>
                </Grid>

                <Grid item xs={5}>
                    <Item onClick={() => switchToTextInputFrame()} className="input-Item">
                        <img src={typeInImage} alt="image" style={{ maxWidth: '150px', height: 'auto', width: '100%' }} />
                        <p className="input-type">Type</p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frame2;