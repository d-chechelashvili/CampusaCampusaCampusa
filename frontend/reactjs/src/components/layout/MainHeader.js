import {Link} from "react-router-dom";

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.link} to={`/`}>
                <div className={classes.logo}>CampusaCampusaCampusa</div>
            </Link>
        </header>
    );
};

export default MainHeader;