import {useState} from "react";

import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

import {getYearInRoman} from "../../../lib/utils";

const SubjectYearFilter = (props) => {
    const [selectedYears, setYears] = useState([]);

    const handleChange = (event) => {
        setYears(event.target.value);
        props.onChange(event);
    };

    const yearValues = [1, 2, 3, 4];

    function getRenderValue(selected) {
        if (selected.length === 0) {
            return "კურსი";
        }
        return selected.map(x => getYearInRoman(x)).join(', ')
    }

    const formStyle = {
        marginTop: 1,
        marginRight: 1,
        minWidth: 65,
        maxWidth: 100,
    };

    return (
        <FormControl size="small" sx={formStyle}>
            <InputLabel sx={{color: "#000000", fontSize: "0.92rem"}}>{selectedYears.length ? "კურსი" : ""}</InputLabel>
            <Select label="კურსი" multiple displayEmpty
                    sx={{color: "#000000", fontSize: "0.92rem"}}
                    value={selectedYears}
                    onChange={handleChange}
                    renderValue={(selected) => getRenderValue(selected)}>
                {yearValues.map((year) => {
                    return (
                        <MenuItem sx={{paddingX: 1}} key={year} value={year}>
                            <Checkbox size="small" checked={selectedYears.indexOf(year) > -1}/>
                            <ListItemText primaryTypographyProps={{fontSize: "0.9rem"}}
                                          primary={getYearInRoman(year)}/>
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default SubjectYearFilter;