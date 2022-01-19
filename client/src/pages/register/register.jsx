import "./register.css"

export default function Register() {
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
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm Password" className="registerInput" />
                        <button className="registerButton">Sign Up</button>
                        <button className="registerLoginButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
