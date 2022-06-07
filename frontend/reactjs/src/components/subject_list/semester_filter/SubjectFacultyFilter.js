import {useState} from "react";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SubjectSemesterFilter = (props) => {
    const [selectedSemester, setSemester] = useState('ALL');

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        float: 'right',
        minWidth: 50,
    };

    const handleChange = (event) => {
        setSemester(event.target.value);
        props.onChange(event);
    };


    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel>სემესტრი</InputLabel>
            <Select label="semester" value={selectedSemester} onChange={handleChange}>
                <MenuItem value="ALL">ყველა</MenuItem>
                <MenuItem value="SPRING">გაზაფხულის</MenuItem>
                <MenuItem value="AUTUMN">შემოდგომის</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SubjectSemesterFilter;