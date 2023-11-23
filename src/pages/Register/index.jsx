import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
    setLoginStatus("");
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    setLoginStatus("");
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(email, password);
    const bodyPayload = {
      email: email,
      password: password,
    };

    // console.log(bodyPayload);

    if (!email.length || !password.length) {
      setLoginStatus("Username dan Password harus diisi");
      return;
    }

    setLoading(true);
    axios
      .post(
        "https://api-car-rental.binaracademy.org/admin/auth/login",
        bodyPayload
      )
      .then((res) => {
        console.log(res.data);
        setLoginStatus("You're logged in");
        localStorage.setItem("access_token", res.data.access_token); //apakah namanya bisa ambil dari keys yang ada di object?
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoginStatus(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="register">
      <Navbar />
      <h1>Ini halaman register</h1>
      <h2>{!email.length || !password.length ? loginStatus : loginStatus}</h2>
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
      <button disabled={loading} onClick={handleLogin}>
        {!loading ? "Login" : "Loading. . ."}
      </button>
    </div>
  );
};

export default Register;