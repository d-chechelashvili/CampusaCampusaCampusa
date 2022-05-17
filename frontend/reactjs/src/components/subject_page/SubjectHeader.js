import React from "react";

import classes from "./SubjectHeader.module.css"

function SubjectHeader(props) {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <h1 className={classes.text}>პროგრამირების მეთოდოლოგია</h1>
                </div>
                <div className={classes.ratingsContainer}>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.text}>შენი შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <select>
                                <option value="?">?</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <h3>&nbsp;/ 5.0</h3>
                        </div>
                    </div>
                    <div className={classes.ratingsContainerColumn}>
                        <h3 className={classes.text}>კამპუსას შეფასება</h3>
                        <div className={classes.pointsContainer}>
                            <h3 className={classes.text}>4.0 / 5.0</h3>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectHeader;
