import {Fragment} from 'react';

import SubjectListItem from "./SubjectListItem";
import classes from './SubjectList.module.css';


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