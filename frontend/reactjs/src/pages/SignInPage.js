import {useContext} from "react";
import {useHistory} from "react-router-dom";
import {GoogleLogin} from '@react-oauth/google';

import {Box} from "@mui/material";

import AuthContext from "../store/auth-context";

function SignInPage(props) {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = (response) => {
        authContext.login(response.credential);
        history.go(-1);
    };

    const backgroundBoxStyle = {
        background: "linear-gradient(90deg, rgba(255, 208, 61, 0.225),  rgba(36, 178, 76, 0.175))",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'calc(100vh - 5rem)',
    };

    const loginWrapperBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: "linear-gradient(90deg, rgb(36, 178, 76, 0.9), rgb(255, 208, 61, 0.9))",
        borderRadius: '15px',
        border: "3px solid #92c145",
        height: '27vh',
        width: '27vw',
        minWidth: 'wrap-content',
        minHeight: 'wrap-content',
    };

    return (
        <Box sx={backgroundBoxStyle}>
            <Box sx={loginWrapperBoxStyle}>
                <GoogleLogin
                    onSuccess={handleLogin}
                    onError={(errorResponse) => {
                        console.log(errorResponse);
                    }}
                    shape="circle"
                    size="large"
                />
            </Box>
        </Box>
    );
}

export default SignInPage;