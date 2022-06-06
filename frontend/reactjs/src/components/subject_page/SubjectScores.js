import React from "react";

import classes from "./SubjectScores.module.css";
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

function SubjectScores(props) {
    const [year, setYear] = React.useState(' ');

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>მიუთითეთ თქვენი შეფასება:</h3>
                    <div className={classes.inputContainer}>
                        <FormControl fullWidth>
                            <TextField
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
                                onChange={handleChange}
                            >
                                <MenuItem value={2010}>2010</MenuItem>
                                <MenuItem value={2011}>2011</MenuItem>
                                <MenuItem value={2012}>2012</MenuItem>
                                <MenuItem value={2013}>2013</MenuItem>
                                <MenuItem value={2014}>2014</MenuItem>
                                <MenuItem value={2015}>2015</MenuItem>
                                <MenuItem value={2016}>2016</MenuItem>
                                <MenuItem value={2017}>2017</MenuItem>
                                <MenuItem value={2018}>2018</MenuItem>
                                <MenuItem value={2019}>2019</MenuItem>
                                <MenuItem value={2020}>2020</MenuItem>
                                <MenuItem value={2021}>2021</MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">სემესტრი</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Fall" control={<Radio/>} label="შემოდგომის"/>
                                <FormControlLabel value="Spring" control={<Radio/>} label="გაზაფხულის"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Button variant="contained" size="large">შენახვა</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectScores;
