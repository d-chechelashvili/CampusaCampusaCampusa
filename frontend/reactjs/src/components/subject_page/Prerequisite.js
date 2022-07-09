import React from "react";

import classes from "./Prerequisite.module.css";
import {Chip} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Prerequisite(props) {
    const linkStyle = {
        "text-decoration": "none",
        "color": "inherit",
    };

    return (
        <React.Fragment>
            <div className={classes.container}>
                <RouterLink style={linkStyle} to={`/subjects/${props.name}`}>
                    <Chip
                        label={props.name}
                        variant="outlined"
                        clickable
                    />
                </RouterLink>
            </div>
        </React.Fragment>
    );
}

export default Prerequisite;
