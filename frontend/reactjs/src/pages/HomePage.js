import {useEffect} from "react";

import useHttp from "../hooks/use-http";
import classes from "./HomePage.module.css";
import {getAllSubjects} from "../library/api";
import SubjectList from "../components/subject_list/SubjectList";

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
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (status === 'completed' && (!loadedSubjects || loadedSubjects.length === 0)) {
        return <p>{"NO DATA"}</p>;
    }
    return (
        <div className={classes.screen}>
            <div className={classes.planner}>
                <h1>Planner</h1>
            </div>
            <div className={classes.list}>
                <SubjectList subjects={loadedSubjects}/>
            </div>
        </div>
    );
};


export default HomePage;
