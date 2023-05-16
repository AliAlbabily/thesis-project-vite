import React, { useState, useEffect } from 'react';
import './css/bubbleComponent.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ThreePIcon from '@mui/icons-material/ThreeP';
import RateReviewIcon from '@mui/icons-material/RateReview';

function BubbleComponent({ open, onClose, textInput, drawingInput }) {

    const [thoughtsData, setThoughtsData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('thoughts');
        const dataArray = JSON.parse(storedData || '[]'); // Providing a fallback value in case storedData is null or cannot be parsed
        setThoughtsData(dataArray);
    }, []);

    return ( 
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="dialog-title">
                Feelings & Thoughts <ThreePIcon fontSize="large" id="thought-icon" />
            </DialogTitle>
            <DialogContent id="dialog-content" dividers>
                <ul className="list">
                    
                    {thoughtsData.map((item, index) => {
                        if (item.inputType === "text") {
                            return (
                                <li key={index} className="item">
                                    <div className="content">
                                        <div>
                                            <h2>Student {index + 1}</h2><RateReviewIcon fontSize="large" />
                                        </div>
                                        {item.input ? <p>{item.input}</p> : null}
                                    </div>
                                </li>
                            )
                        }
                        else if (item.inputType === "image") {
                            return (
                                <li key={index} className="item">
                                    <div className="content">
                                        <div>
                                            <h2>Student {index + 1}</h2><RateReviewIcon fontSize="large" />
                                        </div>
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
                <Button variant="text" color="inherit" onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BubbleComponent;