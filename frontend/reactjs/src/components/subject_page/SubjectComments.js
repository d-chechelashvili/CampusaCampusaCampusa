import React, {useContext, useEffect, useRef} from "react";

import Paper from "@mui/material/Paper";
import SendIcon from '@mui/icons-material/Send';
import {Box, CircularProgress, IconButton, Pagination, TextField, Typography} from "@mui/material";

import useHttp from "../../hooks/use-http";
import SubjectComment from "./SubjectComment";
import classes from "./SubjectComments.module.css";
import AuthContext from "../../store/auth-context";
import * as SubjectInfoAPI from "../../lib/api/SubjectInfoAPI";

const COMMENT_PER_PAGE = 5;

function SubjectComments(props) {
    const commentRef = useRef();
    const authContext = useContext(AuthContext);
    const [page, setPage] = React.useState(1);
    const [comments, setComments] = React.useState([]);
    const {sendRequest, status, data: loadedComments, error} = useHttp(
        SubjectInfoAPI.getComments,
        true
    );

    useEffect(() => {
        sendRequest({accessToken: authContext.token, subjectName: props.subjectName});
    }, [sendRequest, authContext, props.subjectName]);

    useEffect(() => {
        if (status === "completed") {
            setComments(loadedComments);
        }
    }, [status, loadedComments, setComments]);

    if (error) {
        return (
            <Box display="flex"
                 alignItems="center" justifyContent="center">
                <Typography variant="h6">{error}</Typography>
            </Box>
        );
    }

    if (status === "pending") {
        return (
            <Box display="flex" alignItems="center" justifyContent="center">
                <CircularProgress size="4rem" disableShrink/>
            </Box>
        );
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const addNewComment = () => {
        if (commentRef.current.value.length > 0) {
            SubjectInfoAPI.addComment(authContext.token, props.subjectName, commentRef.current.value).then((response) => {
                setComments((prevComments) => {
                    const comment = {
                        comment_text: response.comment_text,
                        author_nickname: response.author_nickname,
                        date: response.date,
                        is_client_author: response.is_client_author,
                    };
                    return [comment, ...prevComments];
                });
            });
        }
        commentRef.current.value = "";
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addNewComment();
        }
    };

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
                                <SubjectComment text={comment.comment_text} date={comment.date}
                                                author={comment.author_nickname} isAuthor={comment.is_client_author}/>
                            ))
                    }
                    <div className={classes.paginationContainer}>
                        <Pagination count={Math.ceil(comments.length / 5)} page={page}
                                    onChange={handlePageChange}/>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default SubjectComments;
