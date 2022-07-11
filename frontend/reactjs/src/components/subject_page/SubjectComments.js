import React, {useRef, useState} from "react";
import classes from "./SubjectComments.module.css";
import Paper from "@mui/material/Paper";
import SubjectComment from "./SubjectComment";
import {IconButton, Pagination, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const initialComments = [
    {
        text: "რამე კომენტარი",
        date: new Date().getTime(),
    },
];

const COMMENT_PER_PAGE = 5;

function SubjectComments(props) {
    const [comments, setComments] = useState(initialComments);
    const commentRef = useRef();
    const [page, setPage] = React.useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const addNewComment = () => {
        if (commentRef.current.value.length > 0) {
            setComments((prevComments) => {
                const comment = {
                    text: commentRef.current.value,
                    date: new Date().getTime(),
                };
                return [comment, ...prevComments];
            });
        }
        commentRef.current.value = "";
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addNewComment();
        }
    }

    const SearchButton = () => (
        <IconButton color="primary" onClick={addNewComment}>
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
                               inputRef={commentRef}
                               onKeyDown={handleKeyPress}
                               InputProps={{endAdornment: <SearchButton/>}}
                    />
                    {
                        comments.slice((page - 1) * COMMENT_PER_PAGE, page * COMMENT_PER_PAGE)
                            .map((comment) => (
                                <SubjectComment text={comment.text} date={comment.date}/>
                            ))
                    }
                    <div className={classes.paginationContainer}>
                        <Pagination count={Math.ceil(comments.length / 5)} page={page} onChange={handlePageChange}/>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default SubjectComments;
