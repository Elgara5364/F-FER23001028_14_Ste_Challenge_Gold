import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../../components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(email, password);
    const bodyPayload = {
      email: email,
      password: password,
    };

    console.log(bodyPayload);
    axios
      .post(
        "https://api-car-rental.binaracademy.org/admin/auth/login",
        bodyPayload
      )
      .then((res) => {
        console.log(res);
        setSuccess(res.statusText);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.data.message);
      });
  };

  return (
    <div className="register">
      <Navbar />
      <h1>Ini halaman register</h1>
      <h2>{email.length && password.length ? success : error}</h2>
      <ul>
        <li>Username :</li>
        <li>
          <input type="email" placeholder="E-Mail" onChange={handleEmail} />
        </li>
      </ul>
      <ul>
        <li>Password :</li>
        <li>
          <input
            className="pass"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </li>
      </ul>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Register;
