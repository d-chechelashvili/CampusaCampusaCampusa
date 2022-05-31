import {useState} from "react";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SubjectFacultyFilter = (props) => {
    const [selectedFaculty, setFaculty] = useState('ALL');

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
        minWidth: 50,
    };

    const handleChange = (event) => {
        setFaculty(event.target.value);
        props.onChange(event);
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel>school</InputLabel>
            <Select label="school" value={selectedFaculty} onChange={handleChange}>
                <MenuItem value="ALL">All</MenuItem>
                {faculties.map((faculty) => {
                    return <MenuItem value={faculty}>{faculty}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default SubjectFacultyFilter;