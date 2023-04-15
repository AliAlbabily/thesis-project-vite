import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/resultFrame.css';
import pieChart from './emojisFeelings/chart.png';
import BubbleComponent from './bubbleComponent';

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

