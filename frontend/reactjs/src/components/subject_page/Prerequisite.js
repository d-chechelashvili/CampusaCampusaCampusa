import React from "react";

import classes from "./Prerequisite.module.css";
import {Chip} from "@mui/material";

function Prerequisite(props) {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Chip
                    label={props.name}
                    component="a"
                    href="www.campusa.herokuapp.com/subjects/პროგრამირების%20მეთოდოლოგიები"
                    variant="outlined"
                    clickable
                />
            </div>
        </React.Fragment>
    );
}

export default Prerequisite;
