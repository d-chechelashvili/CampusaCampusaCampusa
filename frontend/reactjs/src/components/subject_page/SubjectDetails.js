import React from "react";

import classes from "./SubjectDetails.module.css";
import {Chip} from "@mui/material";
import Prerequisite from "./Prerequisite";
import {getSemesterDisplayString} from "../../lib/utils";

function SubjectDetails(props) {
    const credits = (props.credits || 6).toString();
    const semester = getSemesterDisplayString(props.semester);
    const prerequisites = props.prerequisites || ["პროგრამირების აბსტრაქცია", "პროგრამირების პარადიგმები"];

    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>კრედიტი:</h3>
                    <div className={classes.chipContainer}>
                        <Chip label={credits} variant="outlined"/>
                    </div>
                </div>
                <div className={classes.form}>
                    <h3 className={classes.text}>სემესტრი:</h3>
                    <div className={classes.chipContainer}>
                        <Chip label={semester} variant="outlined"/>
                    </div>
                </div>
                <div className={classes.form}>
                    <h3 className={classes.text}>პრერეკვიზიტები:</h3>
                    {prerequisites.map(prerequisite =>
                        <Prerequisite key={prerequisite} name={prerequisite}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectDetails;
