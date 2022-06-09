import {useState} from "react";

import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

const SubjectSemesterFilter = (props) => {
    const [selectedSemesters, setSemesters] = useState([]);

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        minWidth: 110,
        maxWidth: 200,
    };

    const handleChange = (event) => {
        setSemesters(event.target.value);
        props.onChange(event);
    };

    function getSemesterString(semester) {
        switch (semester) {
            case "SPRING":
                return "გაზაფხულის";
            case "AUTUMN":
                return "შემოდგომის";
            default:
                return "ორივეში";
        }
    }

    const semesterValues = ["SPRING", "AUTUMN", "BOTH"];

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel sx={{color: "#000000", fontSize: "0.92rem"}}>სემესტრი</InputLabel>
            <Select label="სემესტრი" multiple
                    sx={{fontSize: "0.92rem"}}
                    value={selectedSemesters}
                    onChange={handleChange}
                    renderValue={(selected) => selected.map(x => getSemesterString(x)).join(', ')}>
                {semesterValues.map((semester) => {
                    return (
                        <MenuItem sx={{paddingX: 1}} key={semester} value={semester}>
                            <Checkbox size="small" checked={selectedSemesters.indexOf(semester) > -1}/>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}}
                                          primary={getSemesterString(semester)}/>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default SubjectSemesterFilter;