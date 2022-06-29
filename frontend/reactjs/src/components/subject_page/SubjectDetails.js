import React from "react";

import classes from "./SubjectDetails.module.css";
import {Chip} from "@mui/material";
import Prerequisite from "./Prerequisite";

function SubjectDetails(props) {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h3 className={classes.text}>კრედიტი:</h3>
                    <div className={classes.chipContainer}>
                        <Chip label="6" variant="outlined"/>
                    </div>
                </div>
                <div className={classes.form}>
                    <h3 className={classes.text}>სემესტრი:</h3>
                    <div className={classes.chipContainer}>
                        <Chip label="შემოდგომის" variant="outlined"/>
                    </div>
                </div>
                <div className={classes.form}>
                    <h3 className={classes.text}>პრერეკვიზიტები:</h3>
                    <Prerequisite name="პროგრამირების აბსტრაქცია"/>
                    <Prerequisite name="პროგრამირების პარადიგმები"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SubjectDetails;
