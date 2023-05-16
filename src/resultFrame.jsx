import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/resultFrame.css';
import pieChart from './emojisFeelings/chart.png';
import BubbleComponent from './bubbleComponent';
import PublicIcon from '@mui/icons-material/Public';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

function resultFrame() {
    const location = useLocation(); // get the current location object
    const navigate = useNavigate()
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

    function switchToFirstFrame() {
        navigate("/")
    }

    return ( 
        <div>
            <div id="resultFrame-header">
                <IconButton
                    variant="outlined"
                    color="inherit"
                    onClick={() => { switchToFirstFrame() }}
                >
                    Home Page<ExitToAppIcon fontSize="large" />
                </IconButton>
                <h2 id="dateHeader">{formattedDate}</h2>
            </div>
            <h2 id="result-description">
                Click the image below for more details on students' feelings and thoughts worldwide! <PublicIcon fontSize="large" id="world-icon" />
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

