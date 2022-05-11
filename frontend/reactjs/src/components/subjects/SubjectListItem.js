import {Link} from "react-router-dom";

const SubjectListItem = (props) => {
    return (
        <li>
            <Link to={`/subjects/${props.subject}`}>
                <button>{props.subject}</button>
            </Link>
        </li>
    );
};

export default SubjectListItem;