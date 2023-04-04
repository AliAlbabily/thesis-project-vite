import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import drawImage from './emojisFeelings/Draw.png';
import typeInImage from './emojisFeelings/TypeIn.png';

function Frame2() {
    // TODO: Skapa states för all data som ska skickas senare till databasen
    // TODO: Gör så att man inte kan gå vidare tills man har valt att antingen skriva eller rita

    // const [emojiName, setEmojiName] = useState("") 

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const location = useLocation(); // get the current location object
    const { emojiName } = location.state; // access the state object passed from the previous component

    return ( 
        <Box sx={{ width: '100%' }}>
            <h1>What made you feel the way you are ?</h1>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 3 }} style={{display: 'flex', justifyContent: 'center'}}>

                <Grid item xs={5}>
                    <Item onClick={() => console.log("Draw")}>
                        <img src={drawImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                    </Item>
                </Grid>

                <Grid item xs={5}>
                    <Item onClick={() => console.log("Type In")}>
                        <img src={typeInImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Frame2;