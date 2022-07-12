import {Box, CardHeader, Typography} from "@mui/material";

function SubjectListItemHeader(props) {
    return (
        <CardHeader
            sx={{paddingBottom: 0}}
            title={props.subjectName}
            subheader={
                <Box sx={{paddingTop: 0.5}}>
                    <Typography sx={{float: "left"}} fontSize="1rem" variant="subtitle1">{props.faculty}</Typography>
                    <Box sx={props.yearBoxStyle}>
                        <Typography sx={{color: "#000000"}} fontSize="0.9rem"
                                    variant="body1">{props.year}</Typography>
                    </Box>
                    <Typography sx={{color: "#000000", float: "right", marginRight: 1}}
                                fontSize="1.03rem" variant="body1">კურსი:</Typography>
                </Box>
            }
        />
    );
}

export default SubjectListItemHeader;