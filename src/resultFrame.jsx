import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/resultFrame.css';
import pieChart from './emojisFeelings/chart.png';
import BubbleComponent from './bubbleComponent';
import PublicIcon from '@mui/icons-material/Public';

function resultFrame() {
    const location = useLocation(); // get the current location object
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [drawingSrc, setDrawingSrc] = useState('');

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US');

    useEffect(() => {
        if (location.state && location.state.text) {
            setText(location.state.text);
        }
        else if (location.state && location.state.drawingSrc) {
            setDrawingSrc(location.state.drawingSrc)
        }
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <div>
            <h1 id="dateHeader">Date: {formattedDate}</h1>
            <h2 id="result-description">
                Here is how students all around the World <PublicIcon fontSize="large" id="world-icon" /> feel right now! 
                Click the image below to see student feelings and thoughts.
            </h2>
            <img 
                src={pieChart} 
                alt="image" 
                id="pieChart"
                onClick={() => handleClickOpen()} 
            />

            <BubbleComponent open={open} onClose={handleClose} textInput={text} drawingInput={drawingSrc} />
        </div>
    );
}
export default resultFrame;

