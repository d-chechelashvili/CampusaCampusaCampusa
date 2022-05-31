import React from "react";

import classes from "./SubjectHeader.module.css";
import programming_methodology_syllabus from "../../media/syllabuses/programming_methodology.pdf";
import {Rating} from "@mui/material";

function SubjectHeader(props) {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <h1 className={classes.text}>პროგრამირების მეთოდოლოგია</h1>
                    <h3 className={classes.text}><a href={programming_methodology_syllabus} target="_blank"
                                                    rel="noreferrer">სილაბუსის ნახვა</a></h3>
                </div>
                <div className={classes.ratingsContainer}>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.centeredText}>თქვენი<br/>ზოგადი შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <Rating name="your-rating" defaultValue={0} precision={1}/>
                        </div>
                    </div>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.centeredText}>კამპუსას<br/>ზოგადი შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <Rating name="campusa-rating" defaultValue={3.5} precision={0.5} readOnly/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectHeader;
