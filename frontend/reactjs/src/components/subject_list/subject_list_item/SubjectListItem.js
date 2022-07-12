import {useState} from "react";
import {Link as RouterLink} from "react-router-dom";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box, Card, CardContent, Collapse, Divider, IconButton, styled} from "@mui/material";

import SubjectListItemInfo from "./SubjectListItemInfo";
import SubjectAdder from "../subject_adder/SubjectAdder";
import SubjectListItemHeader from "./SubjectListItemHeader";
import {getSemesterDisplayString, getYearInRoman} from "../../../lib/utils";


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
    }),
}));

const SubjectListItem = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = (e) => {
        e.preventDefault();
        setIsExpanded((expanded) => !expanded);
    };

    const rating = props.subject.rating;
    const credits = props.subject.credits;
    const faculty = props.subject.faculty;
    const subjectName = props.subject.name;
    const difficulty = props.subject.difficulty;
    const year = getYearInRoman(props.subject.year);
    const semester = getSemesterDisplayString(props.subject.semester, true);

    const linkStyle = {
        "text-decoration": "none",
        "color": "inherit",
    };

    const cardStyle = {
        background: "rgba(207,235,243,0.92)",
        borderRadius: 2.5,
        transition: "all 0.035s ease-in-out",
        "&:hover": {
            transform: "scale(1.015)",
            boxShadow: "1px -1px 2px 1px #c2e7f0",
        },
        paddingBottom: 1.5,
    };

    const lastMarginRightStyle = {
        xs: 0,
        sm: "0.5rem",
        md: 0,
    };

    const infoBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1.3px inset #1a06a6',
        borderRadius: 1,
        minWidth: "1.3rem",
        marginRight: lastMarginRightStyle,
    };

    const yearBoxStyle = {
        ...infoBoxStyle,
        float: "right",
        paddingX: 0.5,
        marginRight: lastMarginRightStyle,
    };

    const cardContentStyle = {
        paddingTop: 0,
        paddingBottom: 0,
    };

    const contentBoxStyle = {
        display: 'flex',
        flexWrap: 'nowrap',
    };

    return (
        <Card sx={cardStyle}>
            <RouterLink style={linkStyle} to={`/subjects/${subjectName}`}>
                <SubjectListItemHeader subjectName={subjectName}
                                       faculty={faculty} year={year}
                                       yearBoxStyle={yearBoxStyle}/>
            </RouterLink>
            <CardContent sx={cardContentStyle}>
                <Box sx={contentBoxStyle}>
                    <ExpandMore
                        expand={isExpanded}
                        onClick={handleExpandClick}
                        aria-expanded={isExpanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                    <SubjectListItemInfo infoBoxStyle={infoBoxStyle}
                                         credits={credits} rating={rating}
                                         difficulty={difficulty} semester={semester}
                                         lastMarginRightStyle={lastMarginRightStyle}/>
                </Box>
            </CardContent>
            <Collapse in={isExpanded} timeout="auto">
                <Divider sx={{background: "rgba(150,145,145,0.96)", marginTop: 1.1}}/>
                <SubjectAdder subjectCredits={credits}
                              subjectName={subjectName}
                              subjectYear={props.subject.year}
                              subjectSemester={props.subject.semester}/>
            </Collapse>
        </Card>
    );
};

export default SubjectListItem;