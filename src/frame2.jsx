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
            <h1 className="frame2-header">What made you feel the way you are ?</h1>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 3 }} style={{display: 'flex', justifyContent: 'center'}}>

                <Grid item xs={5}>
                    <Item onClick={() => switchToDrawInputFrame() }>
                        <img src={drawImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                    </Item>
                </Grid>

                <Grid item xs={5}>
                    <Item onClick={() => switchToTextInputFrame()}>
                        <img src={typeInImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frame2;