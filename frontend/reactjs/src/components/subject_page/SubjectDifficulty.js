import React from "react";

import classes from "./SubjectDifficulty.module.css";
import {Box, Slider} from "@mui/material";

function SubjectDifficulty(props) {
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>როგორ შეაფასებდით საგნის სირთულეს (0 - მარტივი, 10 - რთული):</h3>
                    <Box className={classes.slider}>
                        <Slider
                            aria-label="your-difficulty"
                            defaultValue={0}
                            min={0}
                            max={10}
                            step={1}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </Box>
                </div>
                <div className={classes.form}>
                    <h3 className={classes.text}>როგორ აფასებს კამპუსა საგნის სირთულეს (0 - მარტივი, 10 - რთული):</h3>
                    <Box className={classes.slider}>
                        <Slider
                            aria-label="campusa-difficulty"
                            defaultValue={6.5}
                            min={0}
                            max={10}
                            step={0.1}
                            valueLabelDisplay="on"
                            marks={marks}
                            disabled
                        />
                    </Box>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectDifficulty;
