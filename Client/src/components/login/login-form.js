import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import "./login.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="container d-flex justify-content-center login-form-container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="Login">
                        <h1 className="text-center" style={{ color: "red", fontFamily: "Roboto", fontWeight: 700 }}>Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="email" className="my-1">
                                <Form.Label style={{ fontFamily: "Roboto", fontWeight: 600 }}>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Please enter your email"
                                    style={{ fontFamily: "Roboto", borderRadius: 20, }}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label style={{ fontFamily: "Roboto", fontWeight: 600 }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Please enter your password"
                                    style={{ fontFamily: "Roboto", borderRadius: 20, }}
                                />
                            </Form.Group>
                            <Link to="/">
                                <Button block size="lg" type="submit" disabled={!validateForm()} id="btn">
                                    Login
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <img src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2Ftop10fastfood_main_1200.jpg&h=570&w=855&q=100&v=20170226&c=1" alt="login-img" className="login-img" />
                </div>
            </div>
        </div>
    );
}