import {Link} from "react-router-dom";

import classes from './SubjectListItem.module.css';


const SubjectListItem = (props) => {
    // const minSemester = 1;
    // const activeSemester = 3; 3 means both semesters
    // const credits = 6;
    // const rating = 9.8;
    // const timeRequired = 5.4;
    const subjectName = props.subject.name;
    const faculty = props.subject.faculty;

    return (
        <Link className={classes.link} to={`/subjects/${subjectName}`}>
            <li className={classes.item}>
                <figure>
                    <blockquote>
                        <p>{subjectName}</p>
                    </blockquote>
                    <figcaption>{faculty}</figcaption>
                </figure>
            </li>
        </Link>
    );

};

export default SubjectListItem;