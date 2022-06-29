import {useState} from "react";

import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

import {getUniqueFacultiesFromSubjects} from "../../../lib/utils";

const SubjectFacultyFilter = (props) => {
    const [selectedFaculties, setFaculties] = useState([]);

    const faculties = getUniqueFacultiesFromSubjects(props.subjects);

    const handleChange = (event) => {
        setFaculties(event.target.value);
        props.onChange(event);
    };

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        minWidth: 90,
        maxWidth: 150,
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel sx={{color: "#000000", fontSize: "0.92rem"}}>სკოლა</InputLabel>
            <Select sx={{fontSize: "0.92rem"}}
                    value={selectedFaculties}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    label="სკოლა"
                    multiple>
                {faculties.map((faculty) => {
                    return (
                        <MenuItem sx={{paddingX: 1}} key={faculty} value={faculty}>
                            <Checkbox size="small" checked={selectedFaculties.indexOf(faculty) > -1}/>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}} primary={faculty}/>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default SubjectFacultyFilter;