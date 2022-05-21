import {Fragment, useState} from 'react';

import classes from './SubjectList.module.css';
import SubjectListItem from "./SubjectListItem";
import SubjectSearchBar from "./SubjectSearchBar";


const SubjectList = (props) => {
    const [query, setQuery] = useState("");
    let subjects = props.subjects
    if (!subjects) {
        return <h2>Loading...</h2>;
    }

    const filterSubjects = (event) => {
        setQuery(event.target.value);
    }

    subjects = props.subjects.filter(subject => {
        if (query === "" || subject.toLowerCase().includes(query.toLowerCase())) {
            return subject;
        }
    });

    return (
        <Fragment>
            <div className={classes.controls}>
                <SubjectSearchBar onChange={filterSubjects}/>
            </div>
            <ul className={classes.list}>
                {subjects.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default SubjectList;