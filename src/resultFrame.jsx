import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import pieChart from './emojisFeelings/pie-chart.png';

function resultFrame() {
    const location = useLocation();
    const [text, setText] = useState(''); // TODO: använd denna senare !

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US');

    useEffect(() => {
        if (location.state) {
            setText(location.state.text);
        }
    }, []);

    return ( 
        <div>
            <h1>Date: {formattedDate}</h1>
            <img 
                src={pieChart} 
                alt="image" 
                style={{ width: '100%', maxWidth: '800px', height: 'auto' }} 
                onClick={() => console.log("object")} 
            />
        </div>
    );
}
export default resultFrame;

