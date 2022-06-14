import SemesterHeader from "./SemesterHeader";

function Semester(props) {
    return (
        <SemesterHeader semesterNumber={props.semesterNumber}/>
        // semester body as list of subjects
    );
}

export default Semester;