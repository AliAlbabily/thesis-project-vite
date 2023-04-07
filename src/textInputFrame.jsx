import React from 'react';
import { TextField } from '@material-ui/core';

function TextInputFrame() {
    return (
        <div>
            <TextField
                variant="outlined"
                placeholder="Write your thoughts here !"
                multiline
                minRows={5}
                maxRows={10}
                style={{width: "280px"}}
            />
        </div>
    );
}

export default TextInputFrame;
