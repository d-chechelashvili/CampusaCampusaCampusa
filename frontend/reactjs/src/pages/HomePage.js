import {useCallback, useEffect, useState} from "react";

function HomePage() {
    const [data, setData] = useState({});

    const fetchDataHandler = useCallback(async () => {
        const response = await fetch(window.location.origin + "/api/subjects",
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
