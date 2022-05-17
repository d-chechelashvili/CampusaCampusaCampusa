import {Link} from "react-router-dom";

import classes from './SubjectListItem.module.css';


const SubjectListItem = (props) => {
    const semester = 1;
    const faculty = "MACS";
    const lecturer = "Dr. John Doe";
    const credits = 6;

    return (
        <Link to={`/subjects/${props.subject}`}  style={{textDecoration: 'none'}}>
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