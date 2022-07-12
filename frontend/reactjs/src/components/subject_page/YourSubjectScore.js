import React, {useContext, useRef} from "react";

import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";

import AuthContext from "../../store/auth-context";
import classes from "./YourSubjectScore.module.css";
import * as SubjectInfoAPI from "../../lib/api/SubjectInfoAPI";

function YourSubjectScore(props) {
    const scoreRef = useRef();
    const authContext = useContext(AuthContext);
    const [semester, setSemester] = React.useState("FALL");
    const [year, setYear] = React.useState(new Date().getFullYear());
    const [scoreError, setScoreError] = React.useState(false);
    const [saveSuccess, setSaveSuccess] = React.useState(false);
    const [saveSuccessTimeoutId, setSaveSuccessTimeoutId] = React.useState(null);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const handleSave = () => {
        const score = parseFloat(scoreRef.current.value);
        setScoreError(!Boolean(score));
        setSaveSuccess(Boolean(score));
        clearTimeout(saveSuccessTimeoutId);
        const id = setTimeout(() => {
            setSaveSuccess(false)
        }, 850);
        setSaveSuccessTimeoutId(id);
        SubjectInfoAPI.collectUserScore(authContext.token, props.subjectName, year, semester, score);
    };

    let years = [];
    for (let i = 2010; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h3 className={classes.text}>მიუთითეთ თქვენი შეფასება:</h3>
                <div className={classes.form}>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <TextField
                                inputRef={scoreRef}
                                required
                                id="score"
                                label="ქულა"
                                type="number"
                                size="small"
                                error={scoreError}
                                InputProps={{
                                    inputProps: {
                                        min: 0,
                                        max: 100
                                    }
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">წელი</InputLabel>
                            <Select
                                labelId="year-picker"
                                id="year-picker"
                                value={year}
                                label="წელი"
                                size="small"
                                onChange={handleYearChange}
                            >
                                {years.map(year => (
                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <FormLabel id="demo-row-radio-buttons-group-label">სემესტრი</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={semester}
                                onChange={handleSemesterChange}
                            >
                                <FormControlLabel value="FALL" control={<Radio/>} label="შემოდგომის"/>
                                <FormControlLabel value="SPRING" control={<Radio/>} label="გაზაფხულის"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Button variant="contained" size="large"
                            color={saveSuccess ? "success" : "primary"}
                            onClick={handleSave}>შენახვა</Button></div>
            </div>
        </React.Fragment>
    );
}

export default YourSubjectScore;
