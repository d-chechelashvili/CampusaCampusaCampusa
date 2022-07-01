import axios from "axios";
import {useContext} from "react";
import {useHistory} from "react-router-dom";
import {useGoogleLogin} from '@react-oauth/google';


import {Box} from "@mui/material";
import GoogleButton from 'react-google-button'


import {loginUser} from "../lib/api";
import AuthContext from "../store/auth-context";

function SignInPage(props) {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const token = {accessToken: tokenResponse.access_token, duration: tokenResponse.expires_in};
            authContext.login(token);
            history.go(-1);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    async function handleLogin(response) {
        const token = await loginUser(response);
    }

    const backgroundBoxStyle = {
        background: "linear-gradient(90deg, rgba(255, 208, 61, 0.225),  rgba(36, 178, 76, 0.175))",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'calc(100vh - 5rem)',
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
                <GoogleButton onClick={() => {googleLogin()}}/>
            </Box>
        </Box>
    );
}

export default SignInPage;