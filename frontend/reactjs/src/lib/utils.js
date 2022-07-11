export function getCreditsFromSubjects(subjects) {
    return subjects.reduce((acc, subject) => acc + subject.credits, 0);
}

export function getSubjectPoints(subject) {
    switch (subject.grade) {
        case "A":
            return 4 * subject.credits;
        case "B":
            return 3.38 * subject.credits;
        case "C":
            return 2.77 * subject.credits;
        case "D":
            return 2.16 * subject.credits;
        case "E":
            return 1.55 * subject.credits;
        case "F":
            return 0;
        default:
            return "?";
    }
}

export function getPointsFromSubjects(subjects) {
    return subjects.reduce((acc, subject) => {
        if (acc === "?") {
            return "?";
        }
        const points = getSubjectPoints(subject);
        return points !== "?" ? acc + points : "?";
    }, 0);
}

export function getGPAFromSubjects(subjects) {
    const points = getPointsFromSubjects(subjects);
    const credits = getCreditsFromSubjects(subjects);
    let GPA = points === "?" ? "?" : +(Math.round(points / credits + "e+2") + "e-2");
    if (subjects.length === 0 || !GPA) {
        GPA = 0.0;
    }
    if (Number.isInteger(GPA)) {
        GPA = GPA.toFixed(2);
    }
    return GPA;
}

export function convertNumToRoman(num) {
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

export function getUniqueFacultiesFromSubjects(subjects) {
    let faculties = [];
    for (let i = 0; i < subjects.length; i++) {
        if (faculties.indexOf(subjects[i].faculty) === -1) {
            faculties.push(subjects[i].faculty);
        }
    }
    return faculties;
}

export function getSemesterDisplayString(semester, shortened = false) {
    switch (semester) {
        case "SPRING":
            return shortened ? "გაზ" : "გაზაფხულის";
        case "AUTUMN":
            return shortened ? "შემ" : "შემოდგომის";
        default:
            return shortened ? "სულ" : "ორივეში";
    }
}

export function getYearInRoman(year) {
    switch (year) {
        case 1:
            return "I";
        case 2:
            return "II";
        case 3:
            return "III";
        case 4:
            return "IV";
        default:
            return "?";
    }
}

export function getGradeFromScore(score) {
    score = parseFloat(score);
    switch (true) {
        case score >= 91:
            return "A";
        case score >= 81:
            return "B";
        case score >= 71:
            return "C";
        case score >= 61:
            return "D";
        case score >= 51:
            return "E";
        case score < 51:
            return "F";
        default:
            return "?";
    }
}

export function getGradeDistributionFromScores(scores) {
    let grades = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        "?": 0,
    };
    for (let i = 0; i < scores.length; i++) {
        grades[getGradeFromScore(scores[i])]++;
    }
    return grades;
}

export function getFormattedDate(date) {
    date = new Date(date);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy
}
