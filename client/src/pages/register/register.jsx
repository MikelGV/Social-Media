import "./register.css"
import React, { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()
        if (confirmPassword.current.value !== password.current.value) {
            password.current.setCustomValidity("Password don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user);
                navigate("/login")
            } catch (err) {
                console.log(err)
            }
        }
    };
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Social-Media</h3>
                    <span className="registerDesc">
                        Connect with frineds and the world around you on Social-Media.
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="registerInput" />
                        <input placeholder="Email" type="email" required ref={email} className="registerInput" />
                        <input placeholder="Password" type="password" minLength="6" required ref={password} className="registerInput" />
                        <input placeholder="Confirm Password" type="password" required ref={confirmPassword} className="registerInput" />
                        <button className="registerButton" type="submit">Sign Up</button>
                        <Link to={"/login"}>
                            <button className="registerLoginButton">Log into account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
