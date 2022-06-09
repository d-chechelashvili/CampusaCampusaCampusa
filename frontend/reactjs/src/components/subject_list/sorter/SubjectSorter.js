import {useState} from "react";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const SubjectSorter = (props) => {
    const [selectedSort, setSort] = useState('default');

    const formStyle = {
        marginTop: 1,
    };

    const handleChange = (event) => {
        setSort(event.target.value);
        props.onChange(event);
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel sx={{color: "#000000", fontSize: "0.92rem"}}>დალაგება</InputLabel>
            <Select sx={{fontSize: "0.93rem"}} label="დალაგება" value={selectedSort} onChange={handleChange}>
                <MenuItem value="default">დაულაგებელი</MenuItem>
                <MenuItem value="faculty-asc">სკოლებით</MenuItem>
                <MenuItem value="year-asc">კურსის ზრდადობით</MenuItem>
                <MenuItem value="year-desc">კურსის კლებადობით</MenuItem>
                <MenuItem value="credits-asc">კრედიტების ზრდადობით</MenuItem>
                <MenuItem value="credits-desc">კრედიტების კლებადობით</MenuItem>
                <MenuItem value="time-asc">სირთულის ზრდადობით</MenuItem>
                <MenuItem value="time-desc">სირთულის კლებადობით</MenuItem>
                <MenuItem value="rating-asc">რეიტინგის ზრდადობით</MenuItem>
                <MenuItem value="rating-desc">რეიტინგის კლებადობით</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SubjectSorter;