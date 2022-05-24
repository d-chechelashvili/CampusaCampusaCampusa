import classes from './SubjectSorter.module.css';


const SubjectSorter = (props) => {
    return (
        <select className={classes.sorter} onChange={props.onChange}>
            <option value="default">Default</option>
            <option value="name-asc">By Name Asc</option>
            <option value="name-desc">By Name Desc</option>
            <option value="faculty-asc">By Faculty Asc</option>
            <option value="faculty-desc">By Faculty Desc</option>
            <option value="credits-asc">By Credits Asc</option>
            <option value="credits-desc">By Credits Desc</option>
            <option value="time-asc">By Time Asc</option>
            <option value="time-desc">By Time Desc</option>
            <option value="rating-asc">By Rating Asc</option>
            <option value="rating-desc">By Rating Desc</option>
        </select>
    );
};

export default SubjectSorter;