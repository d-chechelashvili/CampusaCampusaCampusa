import React from "react";
import classes from "./CampusasSubjectScore.module.css";
import {FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import Paper from '@mui/material/Paper';
import {Chart, SeriesTemplate, CommonSeriesSettings} from 'devextreme-react/chart';

function CampusasSubjectScore(props) {
    const [year, setYear] = React.useState("all");

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    const data = [
        {argument: 'A', value: 22},
        {argument: 'B', value: 28},
        {argument: 'C', value: 11},
        {argument: 'D', value: 8},
        {argument: 'E', value: 1},
        {argument: 'F', value: 30},
    ];

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>შეფასებების სტატისტიკა:</h3>
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
                                <MenuItem value={"all"}>ყველა</MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2021}>2021</MenuItem>
                                <MenuItem value={2020}>2020</MenuItem>
                                <MenuItem value={2019}>2019</MenuItem>
                                <MenuItem value={2018}>2018</MenuItem>
                                <MenuItem value={2017}>2017</MenuItem>
                                <MenuItem value={2016}>2016</MenuItem>
                                <MenuItem value={2015}>2015</MenuItem>
                                <MenuItem value={2014}>2014</MenuItem>
                                <MenuItem value={2013}>2013</MenuItem>
                                <MenuItem value={2012}>2012</MenuItem>
                                <MenuItem value={2011}>2011</MenuItem>
                                <MenuItem value={2010}>2010</MenuItem>
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
                                defaultValue="all"
                            >
                                <FormControlLabel value="all" control={<Radio/>} label="ყველა"/>
                                <FormControlLabel value="fall" control={<Radio/>} label="შემოდგომის"/>
                                <FormControlLabel value="spring" control={<Radio/>} label="გაზაფხულის"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Paper className={classes.paper} elevation={5}>
                    <Chart
                        id="chart"
                        palette="material"
                        dataSource={data}>
                        <CommonSeriesSettings
                            argumentField="argument"
                            valueField="value"
                            type="bar"
                            ignoreEmptyPoints={true}
                        />
                        <SeriesTemplate nameField="argument"/>
                    </Chart>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default CampusasSubjectScore;
