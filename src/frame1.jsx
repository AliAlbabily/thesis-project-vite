import React from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import angryImage from './emojisFeelings/Angry_Emoji_large.webp';
import disgustImage from './emojisFeelings/disgust.png';
import fearImage from './emojisFeelings/fear.jpg';
import happyImage from './emojisFeelings/happy.jpg';
import sadImage from './emojisFeelings/sad.jpg';
import suprisedImage from './emojisFeelings/suprised.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Frame1() {
    

    return ( 
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("1")}>
                        <img src={angryImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("2")}>
                        <img src={disgustImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("3")}>
                        <img src={fearImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("4")}>
                        <img src={happyImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("5")}>
                        <img src={sadImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => console.log("6")}>
                        <img src={suprisedImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frame1;