import {useCallback, useEffect, useState} from "react";

const API_HOST = "http://127.0.0.1:8000/api/"

function HomePage() {
    const [data, setData] = useState({});

    const fetchDataHandler = useCallback(async () => {
        const response = await fetch(API_HOST + "subjects",
            {mode: "same-origin"}
        );

        const json = await response.json();

        const subjects = json["subjects"].map((subject) => {
            return (
                <li>
                    <button>{subject}</button>
                </li>
            );
        });

        const dataObject = {
            subjects: subjects
        };

        setData(dataObject);
    }, []);

    useEffect(() => {
        fetchDataHandler();
    }, [fetchDataHandler]);

    return (
        <div>
            <ul>{data.subjects}</ul>
        </div>
    );
}

export default HomePage;
