import React from "react";
import classes from "./SubjectComments.module.css";
import Paper from "@mui/material/Paper";
import SubjectComment from "./SubjectComment";
import {Divider, IconButton, Pagination, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function SubjectComments(props) {
    const SearchButton = () => (
        <IconButton>
            <SendIcon/>
        </IconButton>
    );

    return (
        <React.Fragment>
            <div className={classes.container}>
                <h1 className={classes.text}>კომენტარები</h1>
                <Paper style={{padding: "40px 20px"}}>
                    <TextField fullWidth style={{padding: "0px 0px 48px 0px"}}
                               id="your-comment"
                               label="გაგვიზიარეთ თქვენი გამოცდილება ანონიმურად"
                               InputProps={{endAdornment: <SearchButton/>}}
                    />
                    <SubjectComment/>
                    <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
                    <SubjectComment/>
                    <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
                    <SubjectComment/>
                    <div className={classes.paginationContainer}>
                        <Pagination count={10}/>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default SubjectComments;
