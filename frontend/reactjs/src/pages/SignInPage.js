import {useContext} from "react";
import {useGoogleLogin} from '@react-oauth/google';
import {useLocation, useNavigate} from "react-router-dom";

import {Box} from "@mui/material";
import GoogleButton from 'react-google-button'

import AuthContext from "../store/auth-context";
import * as LoginAPI from "../lib/api/LoginAPI";

function SignInPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const authContext = useContext(AuthContext);

    const googleLogin = useGoogleLogin({
        onSuccess: ({code}) => {
            LoginAPI.loginUser(code).then(handleLogin);
        },
        flow: 'auth-code',
        onError: errorResponse => console.log(errorResponse),
    });

    function handleLogin(response) {
        const data = {
            accessToken: response.access_token,
            expirationTime: response.access_exp * 1000,
            pictureURL: response.picture,
        }
        authContext.login(data);
        if (location.state?.from) {
            navigate(location.state.from, {replace: true});
        } else {
            navigate("/", {replace: true});
        }
    }

    const backgroundBoxStyle = {
        background: "linear-gradient(90deg, rgba(255, 208, 61, 0.225),  rgba(36, 178, 76, 0.175))",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'calc(100vh - 4.35rem)',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
    };

    const loginWrapperBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: "linear-gradient(90deg, rgb(36, 178, 76, 0.8), rgb(255, 208, 61, 0.8))",
        borderRadius: '15px',
        border: "3px solid #92c145",
        height: '25vh',
        width: '30vw',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        paddingX: 0.75,
    };

    return (
        <Box sx={backgroundBoxStyle}>
            <Box sx={loginWrapperBoxStyle}>
                <GoogleButton onClick={() => {
                    googleLogin()
                }}/>
            </Box>
        </Box>
    );
}

export default SignInPage;