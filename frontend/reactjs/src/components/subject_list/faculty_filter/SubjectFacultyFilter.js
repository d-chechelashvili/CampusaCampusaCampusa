import {useState} from "react";

import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

const SubjectFacultyFilter = (props) => {
    const [selectedFaculties, setFaculties] = useState([]);

    function getFaculties(subjects) {
        let faculties = [];
        for (let i = 0; i < subjects.length; i++) {
            if (faculties.indexOf(subjects[i].faculty) === -1) {
                faculties.push(subjects[i].faculty);
            }
        }
        return faculties;
    }

    const faculties = getFaculties(props.subjects);

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        float: 'right',
        minWidth: 90,
        maxWidth: 150,
    };

    const handleChange = (event) => {
        setFaculties(event.target.value);
        props.onChange(event);
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel>სკოლა</InputLabel>
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