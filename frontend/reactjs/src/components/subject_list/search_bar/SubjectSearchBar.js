import {Box, Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SubjectSearchBar = (props) => {
    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #ccc',
        borderRadius: '4px',
    };

    const searchIconStyle = {
        marginRight: 1,
        marginLeft: 1,
    };

    const inputStyle = {
        fontSize: "1.55rem",
    };

    return (
        <Box sx={boxStyle}>
            <SearchIcon fontSize="medium" sx={searchIconStyle}/>
            <Input
                placeholder="ძებნა..."
                onChange={props.onChange}
                sx={inputStyle}
                disableUnderline
                fullWidth
                inputTypeSearch
            />
        </Box>
    );
};

export default SubjectSearchBar;