import {Box, Stack, Typography} from "@mui/material";

import SubjectListItem from "./SubjectListItem";
import useControls from "../../hooks/use-controls";
import SubjectSorter from "./sorter/SubjectSorter";
import SubjectSearchBar from "./search_bar/SubjectSearchBar";
import SubjectFacultyFilter from "./faculty_filter/SubjectFacultyFilter";
import SubjectSemesterFilter from "./semester_filter/SubjectFacultyFilter";


const subj = [
    {name: "პროგრამირების მეთოდოლოგიები", faculty: "MACS", semester: "AUTUMN", credits: 6, time: 6.1, rating: 7.5},
    {name: "პროგრამული უზრუნველყოფის არქიტექტურა", faculty: "MACS", semester: "SPRING", credits: 5, time: 5.1, rating: 7.3},
    {name: "ლიბრი მაგნე", faculty: "GOV", semester: "SPRING", credits: 3, time: 3.1, rating: 7.2},
    {name: "ანთროპოლოგია", faculty: "GEN", semester: "SPRING", credits: 4, time: 4.1, rating: 6.1},
    {name: "ლიბრი მაგნე II", faculty: "GOV", semester: "AUTUMN", credits: 3, time: 3.1, rating: 6.9},
    {name: "პროგრამირების აბსტრაქციები", faculty: "MACS", semester: "SPRING", credits: 8, time: 8.7},
    {name: "ვიზუალური ხელოვნება", faculty: "VAADS", semester: "AUTUMN", credits: 1, time: 1.1, rating: 3.5},
    {name: "ექსელი", faculty: "ESM", semester: "AUTUMN", credits: 2, time: 2.1, rating: 4.5},
];

const sortSubjects = (subjects, sortBy) => {
    const sorter = (subjects, sortBy) => {
        switch (sortBy) {
            case "name":
                return subjects.sort((a, b) => a.name.localeCompare(b.name));
            case "faculty":
                return subjects.sort((a, b) => a.faculty.localeCompare(b.faculty));
            case "credits":
                return subjects.sort((a, b) => a.credits - b.credits);
            case "time":
                return subjects.sort((a, b) => a.time - b.time);
            case "rating":
                return subjects.sort((a, b) => a.rating - b.rating);
            default:
                return subjects;
        }
    };
    const sortingType = sortBy.split("-")[1];
    sortBy = sortBy.split("-")[0];
    subjects = sorter(subjects, sortBy);
    if (sortingType === "desc") {
        subjects.reverse();
    }
    return subjects;
}

const SubjectList = (props) => {
    const {
        searchBarValue, facultyFilterValue, semesterFilterValue, sortType,
        searchBarValueChanged, facultyFilterValueChanged, semesterFilterValueChanged, sortTypeChanged,
    } = useControls();

    props.subjects = subj;
    if (!props.subjects) {
        return <Typography variant="h2" align="center">იტვირთება...</Typography>;
    }

    const searchedSubjects = props.subjects.filter(subject => {
        return searchBarValue === "" ||
            subject.name.toLowerCase().includes(searchBarValue.toLowerCase());
    });

    const subjectsFilteredBySemester = searchedSubjects.filter(subject => {
        return !(subject.semester !== semesterFilterValue &&
            semesterFilterValue !== "ALL");
    });

    const filteredSubjects = subjectsFilteredBySemester.filter(subject => {
        return !(subject.faculty !== facultyFilterValue &&
            facultyFilterValue !== "ALL");
    });

    const sortedSubjects = sortSubjects(filteredSubjects, sortType);

    const gridStyle = {
        height: "100%",
        overflowY: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        },
    };

    return (
        <Stack spacing={2} paddingX={4} paddingY={2.5} sx={gridStyle}>
            <Box>
                <SubjectSearchBar onChange={searchBarValueChanged}/>
                <SubjectSorter onChange={sortTypeChanged}/>
                <SubjectFacultyFilter onChange={facultyFilterValueChanged} subjects={subjectsFilteredBySemester}/>
                <SubjectSemesterFilter onChange={semesterFilterValueChanged}/>
            </Box>
            {sortedSubjects.map((subject) => (
                <SubjectListItem subject={subject}/>
            ))}
        </Stack>
    );
};

export default SubjectList;