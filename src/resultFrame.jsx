import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import pieChart from './emojisFeelings/pie-chart.png';
import BubbleComponent from './bubbleComponent';

function resultFrame() {
    const location = useLocation();
    const [text, setText] = useState(''); // TODO: använd denna senare !
    const [open, setOpen] = useState(false);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US');

    useEffect(() => {
        if (location.state) {
            setText(location.state.text);
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
            <h1>Date: {formattedDate}</h1>
            <img 
                src={pieChart} 
                alt="image" 
                style={{ width: '100%', maxWidth: '800px', height: 'auto' }} 
                onClick={() => handleClickOpen()} 
            />

            <BubbleComponent open={open} onClose={handleClose} textInput={text} />
        </div>
    );
}
export default resultFrame;

