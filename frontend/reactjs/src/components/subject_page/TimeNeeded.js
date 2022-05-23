import React from "react";

import classes from "./TimeNeeded.module.css"

function TimeNeeded(props) {
    function updateHoursSlider() {
        document.getElementById("hoursSlider").value = document.getElementById("hoursInput").value;
    }

    function updateHoursInput() {
        document.getElementById("hoursInput").value = document.getElementById("hoursSlider").value;
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <form className={classes.form}>
                    <h3 className={classes.text}>საშუალოდ რამდენ საათს უთმობდით კვირაში:</h3>
                    <input type="range" id="hoursSlider" className={classes.hoursSlider} min="0" max="24" defaultValue="0"
                           onInput={updateHoursInput}/>
                    <input type="number" className={classes.hoursInput} id="hoursInput" min="0" max="168" defaultValue="0"
                           onInput={updateHoursSlider}/>
                </form>
                <h3 className={classes.text}>საშუალოდ რამდენ საათს უთმობს კამპუსა კვირაში: 3.5</h3>
            </div>
        </React.Fragment>
    );
}

export default TimeNeeded;
