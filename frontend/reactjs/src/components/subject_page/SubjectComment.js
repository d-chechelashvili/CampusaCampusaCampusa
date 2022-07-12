import React from "react";

import {Avatar, Divider, Grid, Typography} from "@mui/material";

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    const nameParts = name.split(" ");
    let children = `${nameParts[0][0]}`;
    if (nameParts.length > 1) {
        children += `${nameParts[1][0]}`;
    }
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: children,
    };
}

function SubjectComment(props) {
    const name = props.author + (props.isAuthor ? " (შენ ხარ)" : "");
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar {...stringAvatar(props.author)} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{
                        margin: 0,
                        textAlign: "left",
                        fontWeight: props.isAuthor ? "bold" : "normal"
                    }}>{name}</h4>
                    <p style={{textAlign: "left", color: "gray"}}>{props.date}</p>
                    <Typography sx={{textAlign: "left"}}
                                display="block" variant="body1">
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
        </React.Fragment>
    );
}

export default SubjectComment;
