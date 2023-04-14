import React from 'react';
import { useNavigate } from "react-router-dom";
import './css/frame1.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import angryImage from './emojisFeelings/Angry_Emoji_large.webp';
import disgustImage from './emojisFeelings/disgust.png';
import fearImage from './emojisFeelings/fear.png';
import happyImage from './emojisFeelings/happy.png';
import sadImage from './emojisFeelings/sad.png';
import suprisedImage from './emojisFeelings/suprised.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Frame1() {
    const navigate = useNavigate()

    function handleSelectedEmoji(selectedEmojiName) {
        console.log(selectedEmojiName)
        navigate("../frame2", { state: { emojiName: selectedEmojiName } })
    }

    return ( 
        <Box style={{ padding: '50px' }}>
            <h1 className="frame1-header">How are you feeling today ?</h1>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Happy")}>
                        <img src={happyImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Suprised")}>
                        <img src={suprisedImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Scared")}>
                        <img src={fearImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Angry")}>
                        <img src={angryImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Sad")}>
                        <img src={sadImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Disgusted")}>
                        <img src={disgustImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frame1;