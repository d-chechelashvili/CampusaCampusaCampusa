import {Fragment} from 'react';
import SubjectListItem from "./SubjectListItem";

const SubjectList = (props) => {
    return (
        <Fragment>
            <ul>
                {props.subjects?.map((subject) => (
                    <SubjectListItem subject={subject}/>
                ))}
            </ul>
        </Fragment>
    );
};

export default SubjectList;