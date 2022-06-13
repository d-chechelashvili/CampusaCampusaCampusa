import {Stack} from "@mui/material";
import Semester from "./Semester/Semester";

function Planner() {
    const boxStyle = {
        border: '1px solid #000000',
        borderRadius: '4px',
        marginTop: "8px",
        marginLeft: 2.5,
        marginRight: {xs: 2.5, sm: 0},
        height: 'calc(100% - 12px)',
    };

    return (
        <Stack spacing={2} sx={boxStyle}>
            <Semester></Semester>
            {/*<SemesterAdder></SemesterAdder>*/}
        </Stack>
    );
}

export default Planner;