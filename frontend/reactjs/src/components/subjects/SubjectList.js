import {Fragment} from 'react';

import classes from './SubjectList.module.css';
import SubjectListItem from "./SubjectListItem";


const SubjectList = (props) => {
    return (
        <Fragment>
            <ul className={classes.list}>
                {props.subjects?.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default SubjectList;