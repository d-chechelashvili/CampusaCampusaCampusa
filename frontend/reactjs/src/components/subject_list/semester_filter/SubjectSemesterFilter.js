import {useState} from "react";

import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

import {getSemesterDisplayString} from "../../../lib/utils";

const SubjectSemesterFilter = (props) => {
    const [selectedSemesters, setSemesters] = useState([]);

    const handleChange = (event) => {
        setSemesters(event.target.value);
        props.onChange(event);
    };

    const semesterValues = ["SPRING", "AUTUMN", "BOTH"];

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        minWidth: 110,
        maxWidth: 200,
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel sx={{color: "#000000", fontSize: "0.92rem"}}>სემესტრი</InputLabel>
            <Select label="სემესტრი" multiple
                    sx={{fontSize: "0.92rem"}}
                    value={selectedSemesters}
                    onChange={handleChange}
                    renderValue={(selected) => selected.map(x => getSemesterDisplayString(x)).join(', ')}>
                {semesterValues.map((semester) => {
                    return (
                        <MenuItem sx={{paddingX: 1}} key={semester} value={semester}>
                            <Checkbox size="small" checked={selectedSemesters.indexOf(semester) > -1}/>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}}
                                          primary={getSemesterDisplayString(semester)}/>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default SubjectSemesterFilter;