import React, {useContext} from "react";

import {Rating} from "@mui/material";

import classes from "./SubjectHeader.module.css";
import AuthContext from "../../store/auth-context";
import * as SubjectInfoAPI from "../../lib/api/SubjectInfoAPI";

function SubjectHeader(props) {
    const authContext = useContext(AuthContext);
    props.userRating = (props.userRating || 0) / 2;
    props.averageRating = (props.averageRating || 0) / 2;
    const [userRating, setUserRating] = React.useState(props.userRating);


    const handleRatingChange = (event, newValue) => {
        setUserRating(newValue);
        SubjectInfoAPI.collectSubjectRating(authContext.token, props.subjectName, newValue * 2);
    };

    let syllabus;
    try {
        syllabus = require("../../media/syllabuses/" + props.syllabusPath);
    } catch (ex) {}

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <h1 className={classes.text}>{props.subjectName}</h1>
                    <h3 className={classes.text}><a href={syllabus} target="_blank"
                                                    rel="noreferrer">სილაბუსის ნახვა</a></h3>
                </div>
                <div className={classes.ratingsContainer}>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.centeredText}>თქვენი<br/>ზოგადი შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <Rating name="your-rating" value={userRating} precision={0.5}
                                    onChange={handleRatingChange}/>
                        </div>
                    </div>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.centeredText}>კამპუსას<br/>ზოგადი შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <Rating name="campusa-rating" defaultValue={props.averageRating} precision={0.5} readOnly/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectHeader;
