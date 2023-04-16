import React from 'react';
import './css/bubbleComponent.css';
import carGift from './emojisFeelings/car-gift.png';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import ThreePIcon from '@mui/icons-material/ThreeP';

function BubbleComponent({ open, onClose, textInput, drawingInput }) {

    return ( 
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="dialog-title">
                <ThreePIcon fontSize="large" id="thought-icon" />
            </DialogTitle>
            <DialogContent id="dialog-content" dividers>
                <ul className="list">
                    <li className="item">
                        {/* First item with your own data */}
                        <div className="content">
                            <h2>Student thought 1</h2>
                            { textInput ? <p>{textInput}</p> : null }
                            { drawingInput ? <img src={drawingInput} alt="image" id="drawing" /> : null }
                        </div>
                    </li>
                    <li className="item">
                        {/* Second item hardcoded */}
                        <div className="content">
                            <h2>Student thought 2</h2>
                            <p>Happiness is not something you acquire, it's something you create.</p>
                        </div>
                    </li>
                    <li className="item">
                        {/* Third item hardcoded */}
                        <div className="content">
                            <h2>Student thought 3</h2>
                            <img src={carGift} alt="Item 3 Image Description" />
                        </div>
                    </li>
                    <li className="item">
                        {/* Fourth item hardcoded */}
                        <div className="content">
                            <h2>Student thought 4</h2>
                            <p>Life is a precious gift. Cherish every moment and make the most of every opportunity.</p>
                        </div>
                    </li>
                </ul>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BubbleComponent;