import {Box, Grid, Stack, Typography} from "@mui/material";

import useControls from "../../hooks/use-controls";
import SubjectSorter from "./sorter/SubjectSorter";
import SubjectSearchBar from "./search_bar/SubjectSearchBar";
import SubjectYearFilter from "./year_filter/SubjectYearFilter";
import SubjectListItem from "./subject_list_item/SubjectListItem";
import SubjectFacultyFilter from "./faculty_filter/SubjectFacultyFilter";
import SubjectSemesterFilter from "./semester_filter/SubjectSemesterFilter";


const subj = [
    {
        name: "პროგრამირების მეთოდოლოგიები",
        faculty: "MACS",
        semester: "AUTUMN",
        year: 1,
        credits: 6,
        difficulty: 6.1,
        rating: 7.5
    },
    {
        name: "პროგრამული უზრუნველყოფის არქიტექტურა",
        faculty: "MACS",
        semester: "SPRING",
        year: 2,
        credits: 5,
        difficulty: 5.1,
        rating: 7.3
    },
    {name: "Libri magni", faculty: "GOV", semester: "SPRING", year: 1, credits: 3, difficulty: 3.1, rating: 7.2},
    {name: "ანთროპოლოგია", faculty: "GEN", semester: "SPRING", year: 1, credits: 4, difficulty: 4.1, rating: 6.1},
    {name: "Libri magni II", faculty: "GOV", semester: "AUTUMN", year: 2, credits: 3, difficulty: 3.1, rating: 6.9},
    {
        name: "პროგრამირების აბსტრაქციები",
        faculty: "MACS",
        semester: "SPRING",
        year: 1,
        credits: 8,
        difficulty: 8.7,
        rating: 7.5
    },
    {
        name: "ვიზუალური ხელოვნება",
        faculty: "VAADS",
        semester: "AUTUMN",
        year: 3,
        credits: 1,
        difficulty: 1.1,
        rating: 3.5
    },
    {name: "ექსელი", faculty: "ESM", semester: "AUTUMN", year: 1, credits: 2, difficulty: 2.1, rating: 4.5},
    {name: "საინტერესო საგანი", faculty: "GEN", semester: "BOTH", year: 4, credits: 3, difficulty: 7.7, rating: 4.5},
];

const sortSubjects = (subjects, sortBy) => {
    const sorter = (subjects, sortBy) => {
        switch (sortBy) {
            case "faculty":
                return subjects.sort((a, b) => a.faculty.localeCompare(b.faculty));
            case "year":
                return subjects.sort((a, b) => a.year - b.year);
            case "credits":
                return subjects.sort((a, b) => a.credits - b.credits);
            case "difficulty":
                return subjects.sort((a, b) => a.difficulty - b.difficulty);
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
        searchBarValue,
        facultyFilterValue,
        semesterFilterValue,
        yearFilterValue,
        sortType,
        searchBarValueChanged,
        facultyFilterValueChanged,
        semesterFilterValueChanged,
        yearFilterValueChanged,
        sortTypeChanged,
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
        return !(!semesterFilterValue.includes(subject.semester) &&
            semesterFilterValue.length !== 0);
    });

    const subjectsFilteredByYear = subjectsFilteredBySemester.filter(subject => {
        return !(!yearFilterValue.includes(subject.year) &&
            yearFilterValue.length !== 0);
    });

    const filteredSubjects = subjectsFilteredByYear.filter(subject => {
        return !(!facultyFilterValue.includes(subject.faculty) &&
            facultyFilterValue.length !== 0);
    });

    const sortedSubjects = sortSubjects(filteredSubjects, sortType);

    const gridStyle = {
        height: "100%",
        overflowY: {
            xs: "visible",
            sm: "auto",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        paddingRight: 3,
        paddingLeft: {xs: 3, lg: 5},
        paddingY: 1.5,
    };

    return (
        <Box sx={gridStyle}>
            <Stack spacing={2}>
                <Box>
                    <SubjectSearchBar onChange={searchBarValueChanged}/>
                    <Grid container justifyContent="flex-end">
                        <SubjectYearFilter onChange={yearFilterValueChanged}/>
                        <SubjectSemesterFilter onChange={semesterFilterValueChanged}/>
                        <SubjectFacultyFilter onChange={facultyFilterValueChanged}
                                              subjects={subjectsFilteredBySemester}/>
                        <SubjectSorter onChange={sortTypeChanged}/>
                    </Grid>
                </Box>
                {sortedSubjects.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </Stack>
            <Box sx={{height: {xs: "15px", sm: 0}, width: {xs: "100%", sm: 0}}}></Box>
        </Box>
    );
};

export default SubjectList;