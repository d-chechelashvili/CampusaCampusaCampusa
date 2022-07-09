import React, {useRef} from "react";

import classes from "./YourSubjectScore.module.css";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";

function YourSubjectScore(props) {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const [semester, setSemester] = React.useState(null);
    const scoreRef = useRef();

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    // TODO
    const handleSave = () => {
        console.log(semester, year, parseFloat(scoreRef.current.value));
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
                    <Button variant="contained" size="large" onClick={handleSave}>შენახვა</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default YourSubjectScore;
