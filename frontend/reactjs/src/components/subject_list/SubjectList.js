import {Fragment} from 'react';

import classes from './SubjectList.module.css';
import SubjectListItem from "./SubjectListItem";
import useControls from "../../hooks/use-controls";
import SubjectSorter from "./sorter/SubjectSorter";
import SubjectSearchBar from "./search_bar/SubjectSearchBar";
import SubjectFacultyFilter from "./faculty_filter/SubjectFacultyFilter";

const subj = [
    {name: "Programming Methodology", faculty: "MACS", credits: 6, time: 6.1, rating: 7.5},
    {name: "Software Engineering", faculty: "MACS", credits: 5, time: 5.1 , rating: 7.3},
    {name: "Libri Magne", faculty: "GOV", credits: 3, time: 3.1, rating: 7.2},
    {name: "Anthropology", faculty: "GEN", credits: 4, time: 4.1, rating: 6.1},
    {name: "Libri Magne II", faculty: "GOV", credits: 3, time: 3.1, rating: 6.9},
    {name: "Programming Abstractions", faculty: "MACS", credits: 8, time: 8.7},
    {name: "Visual Arts", faculty: "VAADS", credits: 1, time: 1.1, rating: 3.5},
    {name: "Excel", faculty: "ESM", credits: 2, time: 2.1, rating: 4.5},
]

const sortSubjects = (subjects, sortBy) => {
    const sorter = (subjects, sortBy) => {
        console.log(sortBy);
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
    }
    const sortingType = sortBy.split("-")[1];
    sortBy = sortBy.split("-")[0];
    subjects = sorter(subjects, sortBy);
    if (sortingType === "desc") {
        subjects.reverse();
    }
    return subjects
}

const SubjectList = (props) => {
    const {
        searchBarValue, facultyFilterValue, sortType,
        searchBarValueChanged, facultyFilterValueChanged, sortTypeChanged
    } = useControls();

    props.subjects = subj;
    if (!props.subjects) {
        return <h2>Loading...</h2>;
    }

    const searchedSubjects = props.subjects.filter(subject => {
        return searchBarValue === "" ||
            subject.name.toLowerCase().includes(searchBarValue.toLowerCase());
    });

    const filteredSubjects = searchedSubjects.filter(subject => {
        return !(subject.faculty !== facultyFilterValue &&
            facultyFilterValue !== "ALL");
    });

    const sortedSubjects = sortSubjects(filteredSubjects, sortType);

    return (
        <Fragment>
            <div className={classes.controls}>
                <SubjectSearchBar onChange={searchBarValueChanged}/>
                <SubjectFacultyFilter onChange={facultyFilterValueChanged} subjects={searchedSubjects}/>
                <SubjectSorter onChange={sortTypeChanged}/>
            </div>
            <ul className={classes.list}>
                {sortedSubjects.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default SubjectList;