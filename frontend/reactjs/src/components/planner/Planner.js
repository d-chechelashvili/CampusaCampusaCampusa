import {useState} from "react";

import {Box, Stack} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";

import Semester from "./Semester/Semester";
import SemesterAdder from "./Semester/SemesterAdder";

const memorizedSemesterList = [
    {
        subjects: [
            {name: "პროგრამირების მეთოდოლოგიები", credits: 12, grade: "B"},
            {name: "პროგრამირების აბსტრაქციები", credits: 8, grade: "C"},
        ]
    },
    {
        subjects: [
            {name: "Libri Magni", credits: 3, grade: "?"},
            {name: "სოციოლოგია", credits: 4, grade: "E"},
            {name: "ფილოსოფია", credits: 4, grade: "F"},
        ]
    },
    {
        subjects: [
            {name: "მსოფლიო ისტორია და საქართველო", credits: 3, grade: "?"},
        ]
    },
];

function Planner() {
    // TODO should fetch list from backend
    const [semesterList, setSemesterList] = useState(memorizedSemesterList);

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
            prevSemesterList[index].subjects = [];
            return [...prevSemesterList];
        });
    };

    const boxStyle = {
        border: "1px groove #ccc",
        borderRadius: "4px",
        marginTop: "8px",
        paddingTop: 1,
        marginLeft: 2.5,
        marginRight: {xs: 2.5, sm: 0},
        height: "calc(100% - 12px)",
    };

    const scrollbarStyle = {
        height: "100%",
    }

    //TODO total credits and GPA არის დასამატებელი

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