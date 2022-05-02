import { useRef } from "react"
import { useContext } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress"


export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email:email.current.value, password:password.current.value}, dispatch)
    }
    console.log(user)
    const handleUserTest = (e) => {
        e.preventDefault()
        loginCall({email: "test2@gmail.com", password: "123456"}, dispatch)
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social-Media</h3>
                    <span className="loginDesc">
                        Connect with frineds and the world around you on Social-Media.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (<CircularProgress color="secondary" />) : ("Log In")}
                        </button>
                        <button onClick={handleUserTest} className="loginButton">Login as Guest</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? (<CircularProgress color="secondary" />) : ("Create a New Account")}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
