import {Box, Divider, Typography} from "@mui/material";

function TotalBar(props) {
    return (
        <Box boxShadow={3} sx={{height: "6.2%", background: "#e0dede", marginTop: "0.3%"}}>
            <Divider sx={{background: "#d3d3d3"}}/>
            <Box display="flex" alignItems="center" justifyContent="space-evenly">
                <Typography marginTop={0.3} variant="h6" fontSize="1.05rem">
                    სულ კრედიტი: {props.totalCredits}
                </Typography>
                <Typography marginTop={0.3} variant="h6" fontSize="1.05rem">
                    GPA: {props.GPA}
                </Typography>
            </Box>
        </Box>
    );
}

export default TotalBar;