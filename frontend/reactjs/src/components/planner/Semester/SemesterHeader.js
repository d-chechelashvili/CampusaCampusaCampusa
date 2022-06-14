import React from 'react';

import {Typography} from "@mui/material";

function SemesterHeader(props) {
    function toRoman(num) {
        const roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        let str = '';
        for (let i of Object.keys(roman)) {
            let q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }

    const semesterNumber = toRoman(props.semesterNumber);
    return (
        <Typography align="center" fontSize="1.2rem">სემესტრი {semesterNumber}</Typography>
    );
}

export default SemesterHeader;