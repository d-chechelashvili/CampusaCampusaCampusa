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
                semesterNumber: prevSemesterList.length + 1,
                subjects: [],
            };
            return [...prevSemesterList, newSemester];
        });
    }

    const boxStyle = {
        border: "1px solid #000000",
        borderRadius: "4px",
        marginTop: "8px",
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
                    {semesterList.map((semester) => {
                        return (
                            <Semester semesterNumber={semester.semesterNumber}
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