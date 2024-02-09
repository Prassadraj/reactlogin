import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function Register() {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let history = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3003/Register", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User Already Have An Acc");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong Details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="register-form">
      <h2 className="register-heading">SignUp page</h2>
      <form action="POST">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="register-input"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="register-input"
          placeholder="Password"
        />
        <input onClick={submit} type="submit" className="register-submit-button" />
      </form>
      <p className="register-or-text">OR</p>
      <Link to="/" className="register-link">Login Page</Link>
    </div>
  );
}
