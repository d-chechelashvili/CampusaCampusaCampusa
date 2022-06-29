import React from "react";
import {Avatar, Divider, Grid} from "@mui/material";

function SubjectComment(props) {
    const imgLink =
        "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/241308846_4824306030936677_632379240956041746_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEoJVq348R3aptPbmG4ZhMel7DM2GhUyKKXsMzYaFTIoiON8XeembuJ8zzo5OBYZWNatFDhrEUVo2JYxIrLF3Gp&_nc_ohc=ZGD30Vtt3wIAX9hrjBT&_nc_ht=scontent.ftbs6-2.fna&oh=00_AT__XOOhdHiyQAipOENrTCeFZpIMsWlN_alM7s5tQMgg-w&oe=62AF8276";

    return (
        <React.Fragment>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="Remy Sharp" src={imgLink}/>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{margin: 0, textAlign: "left"}}>არტურას მექსიკური</h4>
                    <p style={{textAlign: "left", color: "gray"}}>
                        15/06/2020
                    </p>
                    <p style={{textAlign: "left"}}>{props.text} {" "}
                    </p>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
        </React.Fragment>
    );
}

export default SubjectComment;
