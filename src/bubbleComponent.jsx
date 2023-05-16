import React, { useState, useEffect } from 'react';
import './css/bubbleComponent.css';
import carGift from './emojisFeelings/car-gift.png';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import ThreePIcon from '@mui/icons-material/ThreeP';

function BubbleComponent({ open, onClose, textInput, drawingInput }) {

    const [thoughtsData, setThoughtsData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('thoughts');
        const dataArray = JSON.parse(storedData || '[]'); // Providing a fallback value in case storedData is null or cannot be parsed
        console.log(dataArray);
        setThoughtsData(dataArray);
    }, []);

    return ( 
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="dialog-title">
                Thoughts <ThreePIcon fontSize="large" id="thought-icon" />
            </DialogTitle>
            <DialogContent id="dialog-content" dividers>
                <ul className="list">
                    
                    {thoughtsData.map((item, index) => {
                        if (item.inputType === "text") {
                            return (
                                <li key={index} className="item">
                                    <div className="content">
                                        <h2>Student thought {index + 1}</h2>
                                        {item.input ? <p>{item.input}</p> : null}
                                    </div>
                                </li>
                            )
                        }
                        else if (item.inputType === "image") {
                            return (
                                <li key={index} className="item">
                                    <div className="content">
                                        <h2>Student thought {index + 1}</h2>
                                        { item.input ? <img src={item.input} alt="image" id="drawing" /> : null }
                                    </div>
                                </li>
                            )
                        }
                        return null; // Add this line if you don't want to render anything for other cases
                    })}

                </ul>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BubbleComponent;