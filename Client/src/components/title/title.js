import React from "react";
import { Link } from "react-router-dom";

const ClearToken = () => {
    localStorage.removeItem('token');
}

export default function Title({ title }) {
    const token = localStorage.getItem('token');

    if (window.location.pathname !== '/login' && !token) {
        return (
            <div className="row">
                <div className="col-12 mx-auto my-2">
                    <h1 className="text-capitalize text-title">
                        {title}
                    </h1>
                    <Link to="/login">
                        <button className="btn btn-primary login-btn"><i class="fas fa-user"></i> Login</button>
                    </Link>
                </div>
            </div>
        )
    } else if (window.location.pathname !== '/login' && token) {
        return (
            <div className="row">
                <div className="col-12 mx-auto my-2">
                    <h1 className="text-capitalize text-title">
                        {title}
                    </h1>
                    <Link to="/">
                        <button className="btn btn-primary login-btn" onClick={() => { ClearToken(); window.location.href = "/"; }}><i class="fas fa-user"></i> Logout</button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row">
                <div className="col-12 mx-auto my-2">
                    <h1 className="text-capitalize text-title">
                        {title}
                    </h1>
                </div>
            </div>
        )
    }
}