import classes from './SubjectFacultyFilter.module.css';


const SubjectFacultyFilter = (props) => {
    function getFaculties(subjects) {
        let faculties = [];
        for (let i = 0; i < subjects.length; i++) {
            if (faculties.indexOf(subjects[i].faculty) === -1) {
                faculties.push(subjects[i].faculty);
            }
        }
        return faculties;
    }

    const faculties = getFaculties(props.subjects);
    return (
        <select className={classes.filter} onChange={props.onChange}>
            <option value="ALL">All</option>
            {faculties.map((faculty) => {
                return <option value={faculty}>{faculty}</option>
            })}
        </select>
    );
};

export default SubjectFacultyFilter;