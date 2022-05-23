import {Fragment, useState} from 'react';

import classes from './SubjectList.module.css';
import SubjectListItem from "./SubjectListItem";
import SubjectSearchBar from "./SubjectSearchBar";
import useControls from "../../hooks/use-controls";


const SubjectList = (props) => {
    const {searchBarValue, searchBarValueChanged} = useControls();

    let subjects = props.subjects
    if (!subjects) {
        return <h2>Loading...</h2>;
    }

    subjects = props.subjects.filter(subject => {
        return searchBarValue === "" ||
            subject.toLowerCase().includes(searchBarValue.toLowerCase());
    });

    return (
        <Fragment>
            <div className={classes.controls}>
                <SubjectSearchBar onChange={searchBarValueChanged}/>
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