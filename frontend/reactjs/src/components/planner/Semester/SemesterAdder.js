import {Box, Button, Divider} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function SemesterAdder(props) {
    const dividerStyle = {
        marginBottom: 1.1,
        width: "84%",
        background: "#000000"
    }

    const buttonStyle = {
        width: "50%",
        fontSize: "0.85rem",
        background: "#0277bd",
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Divider sx={dividerStyle}/>
            <Button
                size="small"
                variant="contained"
                onClick={props.onClick}
                startIcon={<AddCircleIcon/>}
                sx={buttonStyle}>
                სემესტრის დამატება
            </Button>
        </Box>
    );
}

export default SemesterAdder;