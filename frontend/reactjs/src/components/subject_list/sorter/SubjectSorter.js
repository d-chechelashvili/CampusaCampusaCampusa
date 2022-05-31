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
            <InputLabel>sort</InputLabel>
            <Select label="sort" value={selectedSort} onChange={handleChange}>
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="name-asc">By Name Asc</MenuItem>
                <MenuItem value="name-desc">By Name Desc</MenuItem>
                <MenuItem value="faculty-asc">By Faculty Asc</MenuItem>
                <MenuItem value="faculty-desc">By Faculty Desc</MenuItem>
                <MenuItem value="credits-asc">By Credits Asc</MenuItem>
                <MenuItem value="credits-desc">By Credits Desc</MenuItem>
                <MenuItem value="time-asc">By Time Asc</MenuItem>
                <MenuItem value="time-desc">By Time Desc</MenuItem>
                <MenuItem value="rating-asc">By Rating Asc</MenuItem>
                <MenuItem value="rating-desc">By Rating Desc</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SubjectSorter;