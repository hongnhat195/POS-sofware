import React from "react"
import Title from "../components/title/title"
import LoginForm from "../components/login/login-form"
import useToken from "../components/login/useToken";
import "../ProductStyle/ProductListStyle.css";
import "../components/login/login.css"
const Login = () => {
    const { token, setToken } = useToken();

    const userToken = localStorage.getItem('token');
    if (!userToken) {
        return (
            <div className="login-all">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 NavBar" id="NB2">
                            <Title title="EFC" />
                        </div>
                        <div className="row menu-row">
                            <div className="col-12 col-md-12 col-lg-12 login-container">
                                <LoginForm className="login-form" setToken={setToken} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            window.location.href = "/"
        )
    }
}

export default Login;