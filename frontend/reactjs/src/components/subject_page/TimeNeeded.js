import React from "react";

import classes from "./TimeNeeded.module.css"

function TimeNeeded(props) {
    function updateAmountRange() {
        document.getElementById("amountRange").value = document.getElementById("amountInput").value;
    }

    function updateAmountInput() {
        document.getElementById("amountInput").value = document.getElementById("amountRange").value;
    }

    return (
        <React.Fragment>
            <div className={classes.container}>
                <form className={classes.form}>
                    <h3 className={classes.text}>საშუალოდ რამდენ საათს უთმობდით კვირაში:&nbsp;</h3>
                    <input type="range" id="amountRange" min="0" max="24" defaultValue="0"
                           onInput={updateAmountInput}/>
                    &nbsp;
                    <input type="number" id="amountInput" min="0" max="168" defaultValue="0"
                           onInput={updateAmountRange}/>
                </form>
                <h3 className={classes.text}>საშუალოდ რამდენ საათს უთმობს კამპუსა კვირაში: 3.5</h3>
            </div>
        </React.Fragment>
    );
}

export default TimeNeeded;
