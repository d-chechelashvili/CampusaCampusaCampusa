import {Fragment} from 'react';

import classes from './SubjectList.module.css';
import SubjectListItem from "./SubjectListItem";
import SubjectSearchBar from "./search_bar/SubjectSearchBar";
import useControls from "../../hooks/use-controls";
import SubjectFacultyFilter from "./faculty_filter/SubjectFacultyFilter";

const subj = [{name: "Programming Methodology", faculty: "MACS"},
    {name: "Software Engineering", faculty: "MACS"},
    {name: "Libri Magne", faculty: "GOV"},
    {name: "Anthropology", faculty: "GEN"}]

const SubjectList = (props) => {
    const {
        searchBarValue, facultyFilterValue,
        searchBarValueChanged, facultyFilterValueChanged
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

    return (
        <Fragment>
            <div className={classes.controls}>
                <SubjectSearchBar onChange={searchBarValueChanged}/>
                <SubjectFacultyFilter onChange={facultyFilterValueChanged} subjects={searchedSubjects}/>
            </div>
            <ul className={classes.list}>
                {filteredSubjects.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default SubjectList;