import {Link as RouterLink} from "react-router-dom";

import {Card, CardHeader, Link} from "@mui/material";


const SubjectListItem = (props) => {
    // const minSemester = 1;
    // const activeSemester = 3; 3 means both semesters
    // const credits = 6;
    // const rating = 9.8;
    // const timeRequired = 5.4;
    const subjectName = props.subject.name;
    const faculty = props.subject.faculty;

    const linkStyle = {
        textDecoration: "none",
    }

    const cardStyle = {
        background: "#c2e7f0",
        borderRadius: 2.5,
        transition: "all 0.035s ease-in-out",
        "&:hover": {
            transform: "scale(1.015)",
            boxShadow: "1px -1px 2px 1px #c2e7f0",
        }
    }


    return (
        <Link sx={linkStyle} component={RouterLink} to={`/subjects/${subjectName}`}>
            <Card sx={cardStyle}>
                <CardHeader title={subjectName} subheader={faculty}/>
            </Card>
        </Link>
    );

};

export default SubjectListItem;