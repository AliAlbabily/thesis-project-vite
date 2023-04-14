import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

function BubbleComponent({ open, onClose, textInput }) {

    return ( 
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Simple Dialog</DialogTitle>
            <DialogContent dividers>
                <p>{textInput}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BubbleComponent;