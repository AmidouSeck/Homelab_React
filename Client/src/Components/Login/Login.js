import React from "react";
import "./Login.css";
import NavBar from "../NavBar/NavBar";

const Login = (props) => {
    return (

        <span>
            <div className="container">
            <div className="login-card">
                <div className="left">
                    <img src="../icons/login.png" style={{height : "95%",width : "85%",marginLeft : 90}}/>
                </div>
                <div className="right">
                    <div className="login-login-card">
                        <div style={{ color: '#215EE9', fontSize: 20 }}>Sidentifier
                        <div>
                            <img src="../icons/logo.png" style={{height : 50,width : 50,marginLeft : 20}}/>
                        </div>
                        </div>
                        <div className="myInput">
                            <div>Email</div>
                            <div><input placeholder="email" type="text" name id /></div>
                        </div>
                        <div className="myInput">
                            <div>Mot De Passe</div>
                            <div><input placeholder="mot de passe" type="text" name id /></div>
                        </div>
                        <div>
                            <button className="connect"><a href="/panel">Connexion</a></button>
                        </div>
                        <div>
                            Vous navez pas de compte ? <a href="/signup" style={{ color: '#215EE9' }}>Sinscrire</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </span>


    )
}
export default Login;