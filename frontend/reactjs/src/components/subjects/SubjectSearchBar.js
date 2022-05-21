import classes from './SubjectSearchBar.module.css';


const SubjectSearchBar = (props) => {
    return (
        <input
            placeholder="Search..."
            type="text"
            onChange={props.onChange}
            className={classes.searchBar}
        />
    );
};

export default SubjectSearchBar;