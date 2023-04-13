import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function resultFrame() {
    const location = useLocation();
    const [text, setText] = useState('');

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US');

    useEffect(() => {
        setText(location.state.text);
    }, []);

    return ( 
        <div>
            <h1>Date: {formattedDate}</h1>
            <p>{text}</p>
        </div>
    );
}
export default resultFrame;

