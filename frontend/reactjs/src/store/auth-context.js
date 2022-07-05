import {createContext, useCallback, useEffect, useState} from "react";


let logoutTimer;

const AuthContext = createContext({
    token: '',
    pictureURL: '',
    isLoggedIn: false,
    login: (token) => {
    },
    logout: () => {
    },
});

const calculateRemainingTime = (expirationTime) => {
    return expirationTime - new Date().getTime();
};

const retrieveStoredData = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationTime = parseInt(localStorage.getItem('expirationTime'));
    const storedPictureURL = localStorage.getItem('pictureURL');

    const remainingTime = calculateRemainingTime(storedExpirationTime);

    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('pictureURL');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
        pictureURL: storedPictureURL,
    };
};

export const AuthContextProvider = (props) => {
    const initialData = retrieveStoredData();

    let initialToken;
    let initialPictureURL;
    if (initialData) {
        initialToken = initialData.token;
        initialPictureURL = initialData.pictureURL;
    }

    const [token, setToken] = useState(initialToken);
    const [pictureURL, setPictureURL] = useState(initialPictureURL);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        setPictureURL(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('pictureURL');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (data) => {
        setToken(data.accessToken);
        setPictureURL(data.pictureURL);
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('expirationTime', data.expirationTime.toString());
        localStorage.setItem('pictureURL', data.pictureURL);

        const remainingTime = calculateRemainingTime(data.expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {
        if (initialData) {
            logoutTimer = setTimeout(logoutHandler, initialData.duration);
        }
    }, [initialData, logoutHandler]);


    const contextValue = {
        token: token,
        pictureURL: pictureURL,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;