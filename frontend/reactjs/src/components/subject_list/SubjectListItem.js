import {Link as RouterLink} from "react-router-dom";

import {Box, Card, CardContent, CardHeader, Divider, Link, Typography} from "@mui/material";


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


    function getSemesterString(semester) {
        switch (semester) {
            case "SPRING":
                return "გაზ";
            case "AUTUMN":
                return "შემ";
            default:
                return "სულ";
        }
    }

    const semester = getSemesterString(props.subject.semester);
    const credits = props.subject.credits;
    const rating = props.subject.rating;
    const difficulty = props.subject.difficulty;
    const subjectName = props.subject.name;
    const faculty = props.subject.faculty;

    const linkStyle = {
        textDecoration: "none",
    };

    const cardStyle = {
        background: "rgba(194,231,240,0.98)",
        borderRadius: 2.5,
        transition: "all 0.035s ease-in-out",
        "&:hover": {
            transform: "scale(1.015)",
            boxShadow: "1px -1px 2px 1px #c2e7f0",
        }
    };

    const infoBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1.3px inset #1a06a6',
        borderRadius: 1,
        minWidth: "1.3rem",
        marginRight: "0.4rem",
    };

    const yearBoxStyle = {
        ...infoBoxStyle,
        float: "right",
        paddingX: 0.5,
        marginRight: 0,
    };

    const cardContentStyle = {
        paddingTop: 1.5,
        paddingBottom: 0,
        "&:last-child": {
            paddingBottom: 1.5,
        },
    };

    const bottomTextStyle = {
        marginRight: 0.8,
        fontSize: "1rem",
    };

    const dividerStyle = {
        marginRight: "0.4rem"
    };

    return (
        <Link sx={linkStyle} component={RouterLink} to={`/subjects/${subjectName}`}>
            <Card sx={cardStyle}>
                <CardHeader
                    sx={{paddingBottom: 0}}
                    title={subjectName}
                    subheader={
                        <Box sx={{paddingTop: 0.5}}>
                            <Typography sx={{float: "left"}} fontSize="1rem" variant="subtitle1">{faculty}</Typography>
                            <Box sx={yearBoxStyle}>
                                <Typography sx={{color: "#000000"}} fontSize="0.9rem"
                                            variant="body1">{year}</Typography>
                            </Box>
                            <Typography sx={{color: "#000000", float: "right", marginRight: 1}}
                                        fontSize="1rem" variant="body1">კურსი:</Typography>
                        </Box>
                    }
                />
                <CardContent sx={cardContentStyle}>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <Typography sx={bottomTextStyle} variant="h6">კრედიტი:</Typography>
                        <Box sx={infoBoxStyle}>
                            <Typography sx={{color: "#000000"}} fontSize="0.9rem" variant="body1">{credits}</Typography>
                        </Box>
                        <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                        <Typography sx={bottomTextStyle} variant="h6">რეიტინგი:</Typography>
                        <Box sx={{...infoBoxStyle, minWidth: "1.8rem"}}>
                            <Typography sx={{color: "#000000"}} fontSize="0.9rem" variant="body1">{rating}</Typography>
                        </Box>
                        <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                        <Typography sx={bottomTextStyle} variant="h6">სირთულე:</Typography>
                        <Box sx={{...infoBoxStyle, minWidth: "1.8rem"}}>
                            <Typography sx={{color: "#000000"}} fontSize="0.9rem"
                                        variant="body1">{difficulty}</Typography>
                        </Box>
                        <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                        <Typography sx={bottomTextStyle} variant="h6">სემესტრი:</Typography>
                        <Box sx={{...infoBoxStyle, minWidth: "2.1rem", marginRight: 0}}>
                            <Typography sx={{color: "#000000"}} fontSize="0.9rem"
                                        variant="body1">{semester}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );

};

export default SubjectListItem;