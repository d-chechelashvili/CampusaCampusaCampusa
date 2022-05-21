import {Link} from "react-router-dom";

import classes from './SubjectListItem.module.css';


const SubjectListItem = (props) => {
    // const semester = 1;
    // const lecturer = "Dr. John Doe";
    // const credits = 6;
    const faculty = "MACS";

    return (
        <Link className={classes.link} to={`/subjects/${props.subject}`}>
            <li className={classes.item}>
                <figure>
                    <blockquote>
                        <p>{props.subject}</p>
                    </blockquote>
                    <figcaption>{faculty}</figcaption>
                </figure>
            </li>
        </Link>
    );

};

export default SubjectListItem;