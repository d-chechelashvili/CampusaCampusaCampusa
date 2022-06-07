import {Link as RouterLink} from "react-router-dom";

import {Box, Card, CardHeader, Link, Typography} from "@mui/material";


const SubjectListItem = (props) => {
    function getYearInRoman(year) {
        switch (year) {
            case 1:
                return "I";
            case 2:
                return "II";
            case 3:
                return "III";
            case 4:
                return "IV";
            default:
                return "?";
        }
    }

    const year = getYearInRoman(props.subject.year);


    // const semester = props.subject.semester;
    // const credits = props.subject.credits;
    // const rating = props.subject.rating;
    // const difficulty = props.subject.difficulty;
    const subjectName = props.subject.name;
    const faculty = props.subject.faculty;

    const linkStyle = {
        textDecoration: "none",
    };

    const cardStyle = {
        background: "rgba(194,231,240,0.87)",
        borderRadius: 2.5,
        transition: "all 0.035s ease-in-out",
        "&:hover": {
            transform: "scale(1.015)",
            boxShadow: "1px -1px 2px 1px #c2e7f0",
        }
    };

    const headerStyle = {
        display: "table-cell",
        verticalAlign: "bottom",
    }

    const yearBoxStyle = {
        float: "right",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1.3px inset #1a06a6',
        borderRadius: 1,
        minWidth: "1.5rem",
        paddingX: 0.5,
        marginRight: 0,
    };

    return (
        <Link sx={linkStyle} component={RouterLink} to={`/subjects/${subjectName}`}>
            <Card sx={cardStyle}>
                <CardHeader
                    title={subjectName}
                    subheader={
                        <Box>
                            <Typography sx={{float: "left"}} variant="subtitle1">{faculty}</Typography>
                            <Box sx={yearBoxStyle}>
                                <Typography sx={{color: "#000000"}} variant="body1">{year}</Typography>
                            </Box>
                            <Typography sx={{color: "#000000", float: "right", marginRight: 1}}
                                        variant="body1">კურსი:</Typography>
                        </Box>
                    }
                />
            </Card>
        </Link>
    );

};

export default SubjectListItem;