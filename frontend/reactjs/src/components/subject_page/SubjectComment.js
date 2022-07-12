import React from "react";

import {Divider, Grid, Typography} from "@mui/material";

function SubjectComment(props) {
    const name = props.author + (props.isAuthor ? " (შენ ხარ)" : "");
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{
                        margin: 0,
                        textAlign: "left",
                        fontWeight: props.isAuthor ? "bold" : "normal"
                    }}>{name}</h4>
                    <p style={{textAlign: "left", color: "gray"}}>{props.date}</p>
                    <Typography sx={{marginLeft: "16px", textAlign: "left"}}
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
