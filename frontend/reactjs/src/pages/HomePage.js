import {Fragment, useEffect} from "react";

import useHttp from "../hooks/use-http";
import {getAllSubjects} from "../library/api";
import SubjectList from "../components/subjects/SubjectList";
import classes from "./HomePage.module.css";

const HomePage = () => {
    const {sendRequest, status, data: loadedSubjects, error} = useHttp(
        getAllSubjects,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    // todo if status pending could show loading spinner
    if (status === 'pending') {
        return (
            <div>
                <p>{"LOADING..."}</p>
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (status === 'completed' && (!loadedSubjects || loadedSubjects.length === 0)) {
        return <p>{"NO DATA"}</p>;
    }
    return (
        <Fragment>
            <div className={classes.planner}></div>
            <div className={classes.list}>
                <SubjectList subjects={loadedSubjects}/>
            </div>
        </Fragment>
    );
};


export default HomePage;
