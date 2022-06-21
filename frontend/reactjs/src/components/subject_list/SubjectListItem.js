import {useState} from "react";

import {Link as RouterLink} from "react-router-dom";

import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Grid,
    IconButton,
    styled,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SubjectAdder from "./subject_adder/SubjectAdder";


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

    const year = getYearInRoman(props.subject.year);
    const semester = getSemesterString(props.subject.semester);
    const credits = props.subject.credits;
    const rating = props.subject.rating;
    const difficulty = props.subject.difficulty;
    const subjectName = props.subject.name;
    const faculty = props.subject.faculty;

    const linkStyle = {
        "text-decoration": "none",
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
        paddingTop: 1.5,
        paddingBottom: 0,
    };

    const contentBoxStyle = {
        display: 'flex',
        flexWrap: 'nowrap',
    };

    const bottomTextStyle = {
        marginRight: 0.8,
        fontSize: "1.05rem",
    };

    const dividerStyle = {
        marginLeft: 0.75,
        display: {
            lg: "inherit",
            xs: "none",
        }
    };

    const infoWrappingBoxStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    };

    return (
        <RouterLink style={linkStyle} to={`/subjects/${subjectName}`}>
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
                    <Box sx={contentBoxStyle}>
                        <ExpandMore
                            expand={isExpanded}
                            onClick={handleExpandClick}
                            aria-expanded={isExpanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                        <Grid container columnSpacing={0.75} rowSpacing={1} justifyContent="flex-end" alignItems="end">
                            <Grid item xs={5} sm="auto" md={5} lg="auto">
                                <Box sx={infoWrappingBoxStyle}>
                                    <Typography sx={bottomTextStyle} variant="h6">კრედიტი:</Typography>
                                    <Box sx={infoBoxStyle}>
                                        <Typography fontSize="0.9rem" variant="body1">{credits}</Typography>
                                    </Box>
                                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                                </Box>
                            </Grid>

                            <Grid item xs={5} sm="auto" md={5} lg="auto">
                                <Box sx={infoWrappingBoxStyle}>
                                    <Typography sx={bottomTextStyle} variant="h6">რეიტინგი:</Typography>
                                    <Box sx={{...infoBoxStyle, minWidth: "1.8rem"}}>
                                        <Typography fontSize="0.9rem" variant="body1">{rating}</Typography>
                                    </Box>
                                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                                </Box>
                            </Grid>

                            <Grid item xs={5} sm="auto" md={5} lg="auto">
                                <Box sx={infoWrappingBoxStyle}>
                                    <Typography sx={bottomTextStyle} variant="h6">სირთულე:</Typography>
                                    <Box sx={{...infoBoxStyle, minWidth: "1.8rem"}}>
                                        <Typography fontSize="0.9rem" variant="body1">{difficulty}</Typography>
                                    </Box>
                                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                                </Box>
                            </Grid>

                            <Grid item xs={5} sm="auto" md={5} lg="auto">
                                <Box sx={infoWrappingBoxStyle}>
                                    <Typography sx={bottomTextStyle} variant="h6">სემესტრი:</Typography>
                                    <Box sx={{...infoBoxStyle, minWidth: "2.1rem", marginRight: lastMarginRightStyle,}}>
                                        <Typography fontSize="0.9rem" variant="body1">{semester}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <Collapse in={isExpanded} timeout="auto">
                    <Divider sx={{background: "rgba(150,145,145,0.96)", marginTop: 1.1}}/>
                    <SubjectAdder subjectName={subjectName} subjectCredits={credits}/>
                </Collapse>
            </Card>
        </RouterLink>
    );
};

export default SubjectListItem;