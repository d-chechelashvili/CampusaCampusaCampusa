import {Box, Typography} from "@mui/material";

import campusa from "../media/images/Campusa.jpg"

function NotFoundPage() {
    const backgroundBoxStyle = {
        background: "linear-gradient(90deg, rgba(255, 208, 61, 0.225),  rgba(36, 178, 76, 0.175))",
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: 'max(100vw, wrap-content)',
        height: 'calc(100vh - 1rem)',
        minHeight: 'fit-content',
    };

    const imageStyle = {
        maxHeight: 'calc(100vh - 8rem)',
        maxWidth: '90vw',
        paddingBottom: 3,
    };

    return (
        <Box sx={backgroundBoxStyle}>
            <Typography textAlign="center" marginTop={3} marginBottom={3} fontSize="2.75rem" variant="h3">სამწუხაროდ
                გვერდი ვერ მოიძებნა :(</Typography>
            <Box sx={imageStyle} component="img" alt="*კამპუსას სურათი* :)" src={campusa}></Box>
        </Box>
    );
}

export default NotFoundPage;