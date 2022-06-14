import {useState} from "react";

import {Box, Stack} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";

import Semester from "./Semester/Semester";
import SemesterAdder from "./Semester/SemesterAdder";

function Planner() {
    const [semesterList, setSemesterList] = useState([]);

    // TODO should fetch list from backend

    const addSemester = () => {
        setSemesterList((prevSemesterList) => {
            const newSemester = {
                subjects: [],
            };
            return [...prevSemesterList, newSemester];
        });
    };

    const removeSemester = (semesterNumber) => {
        setSemesterList((prevSemesterList) => {
            const index = semesterNumber - 1;
            prevSemesterList.splice(index, 1);
            return [...prevSemesterList];
        });
    };

    const boxStyle = {
        border: "1px groove #ccc",
        borderRadius: "4px",
        marginTop: "8px",
        paddingTop: 0.25,
        marginLeft: 2.5,
        marginRight: {xs: 2.5, sm: 0},
        height: "calc(100% - 12px)",
    };

    const scrollbarStyle = {
        height: "100%",
    }

    return (
        <Box sx={boxStyle}>
            <Scrollbars autoHide style={scrollbarStyle}>
                <Stack spacing={2}>
                    {semesterList.map((semester, index) => {
                        return (
                            <Semester onDeleteClicked={removeSemester}
                                      semesterNumber={index + 1}
                                      subjects={semester.subjects}/>
                        );
                    })}
                    <SemesterAdder onClick={addSemester}></SemesterAdder>
                </Stack>
            </Scrollbars>
        </Box>
    );
}

export default Planner;