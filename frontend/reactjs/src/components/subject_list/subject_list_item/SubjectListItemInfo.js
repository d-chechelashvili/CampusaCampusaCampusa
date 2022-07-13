import {Box, Divider, Grid, Typography} from "@mui/material";

function SubjectListItemInfo(props) {
    props.rating = props.rating.toFixed(1);
    props.difficulty = props.difficulty.toFixed(1);

    const infoWrappingBoxStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
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
        },
    };

    return (
        <Grid container columnSpacing={0.75} rowSpacing={1} justifyContent="flex-end" alignItems="end">
            <Grid item xs="auto" md={5} lg="auto">
                <Box sx={infoWrappingBoxStyle}>
                    <Typography sx={bottomTextStyle} variant="h6">კრედიტი:</Typography>
                    <Box sx={props.infoBoxStyle}>
                        <Typography fontSize="0.9rem" variant="body1">{props.credits}</Typography>
                    </Box>
                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                </Box>
            </Grid>

            <Grid item xs="auto" md={5} lg="auto">
                <Box sx={infoWrappingBoxStyle}>
                    <Typography sx={bottomTextStyle} variant="h6">რეიტინგი:</Typography>
                    <Box sx={{...props.infoBoxStyle, minWidth: "1.8rem"}}>
                        <Typography fontSize="0.9rem" variant="body1">{props.rating}</Typography>
                    </Box>
                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                </Box>
            </Grid>

            <Grid item xs="auto" md={5} lg="auto">
                <Box sx={infoWrappingBoxStyle}>
                    <Typography sx={bottomTextStyle} variant="h6">სირთულე:</Typography>
                    <Box sx={{...props.infoBoxStyle, minWidth: "1.8rem"}}>
                        <Typography fontSize="0.9rem" variant="body1">{props.difficulty}</Typography>
                    </Box>
                    <Divider sx={dividerStyle} orientation="vertical" flexItem/>
                </Box>
            </Grid>

            <Grid item xs="auto" md={5} lg="auto">
                <Box sx={infoWrappingBoxStyle}>
                    <Typography sx={bottomTextStyle} variant="h6">სემესტრი:</Typography>
                    <Box sx={{...props.infoBoxStyle, minWidth: "2.1rem", marginRight: props.lastMarginRightStyle}}>
                        <Typography fontSize="0.9rem" variant="body1">{props.semester}</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SubjectListItemInfo;