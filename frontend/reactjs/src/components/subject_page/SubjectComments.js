import React, {useState} from "react";
import classes from "./SubjectComments.module.css";
import Paper from "@mui/material/Paper";
import SubjectComment from "./SubjectComment";
import {IconButton, Pagination, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const initialComments = [
    {
        text: "რამე კომენტარი"
    },
];

function SubjectComments(props) {
    const [comments, setComments] = useState(initialComments);

    let newComment = "";

    function newCommentUpdated(e) {
        newComment = e.target.value;
    }

    function addNewComment() {
        setComments((prevComments) => {
            const comment = {
                text: newComment
            };
            return [comment, ...prevComments];
        });
    }

    const SearchButton = () => (
        <IconButton onClick={addNewComment}>
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
                               onInput={newCommentUpdated}
                               InputProps={{endAdornment: <SearchButton/>}}
                    />
                    {
                        comments.map((comment) => (
                            <SubjectComment text={comment.text}/>
                        ))
                    }
                    <div className={classes.paginationContainer}>
                        <Pagination count={10}/>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default SubjectComments;
