import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./login.css";

function loginUser(user) {
  console.log(user);
  return axios
    .post("http://localhost:5000/api/v1/cus", user)
    .then((data) => {
      if (data.data.length > 0) {
        console.log(data);
        return data.data;
      } else {
        console.log("Login Failed");
        alert("Vui lòng nhập đúng tài khoản và mật khẩu");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function LoginForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    const token = await loginUser(user);
    setToken(token);
    console.log(token);
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className="container d-flex justify-content-center login-form-container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <div className="Login">
            <h1
              className="text-center"
              style={{ color: "red", fontFamily: "Roboto", fontWeight: 700 }}
            >
              Login
            </h1>
            <Form onSubmit={handleSubmit} action="#">
              <Form.Group size="lg" controlId="email" className="my-1">
                <Form.Label style={{ fontFamily: "Roboto", fontWeight: 600 }}>
                  Username
                </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Please enter your username"
                  style={{ fontFamily: "Roboto", borderRadius: 20 }}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label style={{ fontFamily: "Roboto", fontWeight: 600 }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Please enter your password"
                  style={{ fontFamily: "Roboto", borderRadius: 20 }}
                />
              </Form.Group>
              <Button
                block
                size="lg"
                type="submit"
                disabled={!validateForm()}
                id="btn"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <img
            src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2Ftop10fastfood_main_1200.jpg&h=570&w=855&q=100&v=20170226&c=1"
            alt="login-img"
            className="login-img"
          />
        </div>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
