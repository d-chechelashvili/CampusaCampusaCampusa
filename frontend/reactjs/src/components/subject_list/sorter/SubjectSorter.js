import {useState} from "react";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const SubjectSorter = (props) => {
    const [selectedSort, setSort] = useState('default');

    const formStyle = {
        marginTop: 1,
        float: "right",
    };

    const handleChange = (event) => {
        setSort(event.target.value);
        props.onChange(event);
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel>დალაგება</InputLabel>
            <Select label="დალაგება" value={selectedSort} onChange={handleChange}>
                <MenuItem value="default">დაულაგებელი</MenuItem>
                <MenuItem value="faculty-asc">სკოლებით</MenuItem>
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