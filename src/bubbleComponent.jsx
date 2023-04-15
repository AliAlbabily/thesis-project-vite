import React from 'react';
import './css/bubbleComponent.css';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

function BubbleComponent({ open, onClose, textInput, drawingInput }) {

    return ( 
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Simple Dialog</DialogTitle>
            <DialogContent dividers>
                { textInput ? <p>{textInput}</p> : null }
                { drawingInput ? <img src={drawingInput} alt="image" id="drawing" /> : null }
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BubbleComponent;