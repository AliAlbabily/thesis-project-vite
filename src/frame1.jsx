import React from 'react';
import { useNavigate } from "react-router-dom";
import './css/frame1.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import angryImage from './emojisFeelings/angry-face.png';
import disgustImage from './emojisFeelings/disgusted-face.png';
import fearImage from './emojisFeelings/fearful-face.png';
import happyImage from './emojisFeelings/happy-face.png';
import sadImage from './emojisFeelings/sad-face.png';
import suprisedImage from './emojisFeelings/surprised-face.png';

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
        <Box id="frame1-container">
            <h1 className="frame1-header">How are you feeling today ?</h1>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Happy")} className="emoji-Item" id="happy">
                        <img src={happyImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Happy</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Suprised")} className="emoji-Item" id="surprised">
                        <img src={suprisedImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Suprised</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Scared")} className="emoji-Item" id="scared">
                        <img src={fearImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Scared</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Angry")} className="emoji-Item" id="angry">
                        <img src={angryImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Angry</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Sad")} className="emoji-Item" id="sad">
                        <img src={sadImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Sad</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item onClick={() => handleSelectedEmoji("Disgusted")} className="emoji-Item" id="disgusted">
                        <img src={disgustImage} alt="image" style={{ maxWidth: '100%', height: '150px' }} />
                        <p className="input-type">Disgusted</p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Frame1;