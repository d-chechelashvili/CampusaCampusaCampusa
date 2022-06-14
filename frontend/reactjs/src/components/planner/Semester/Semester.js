import SemesterHeader from "./SemesterHeader";

function Semester(props) {
    const removeSemester = () => {
        props.onDeleteClicked(props.semesterNumber);
    };

    return (
        <SemesterHeader onDeleteClicked={removeSemester} semesterNumber={props.semesterNumber}/>
        // semester body as list of subjects
    );
}

export default Semester;