import React, {useContext} from "react";

import classes from "./SubjectDifficulty.module.css";
import {Box, Slider} from "@mui/material";
import AuthContext from "../../store/auth-context";
import * as SubjectInfoAPI from "../../lib/api/SubjectInfoAPI";

function SubjectDifficulty(props) {
    props.userDifficulty = (props.userDifficulty || 0);
    props.averageDifficulty = (props.averageDifficulty || 0);
    const authContext = useContext(AuthContext);
    const [userDifficulty, setUserDifficulty] = React.useState(props.userDifficulty);
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

    const handleDifficultyChange = (event, newValue) => {
        setUserDifficulty(newValue);
        SubjectInfoAPI.collectSubjectDifficulty(authContext.token, props.subjectName, newValue);
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>როგორ შეაფასებდით საგნის სირთულეს (0 - მარტივი, 10 - რთული):</h3>
                    <Box className={classes.slider}>
                        <Slider
                            aria-label="your-difficulty"
                            value={userDifficulty}
                            onChange={handleDifficultyChange}
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
                            defaultValue={props.averageDifficulty}
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
