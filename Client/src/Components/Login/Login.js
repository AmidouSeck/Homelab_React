import React from "react";
import "./Login.css";
import NavBar from "../NavBar/NavBar";

const Login = (props) => {
    const image = '/Users/amidouseck/Desktop/Homelab_React/Client/src/assets/images/3071357.svg'
    return (

        <span>
            <div className="container">
            <div className="login-card">
                <div style={{width: '100%', height:'100%'}} className="left">
                    <div style={{width: '100%', height:'100%'}} className="content">
                        <div className="imageBg">
                            <img style={{width: '100%', height:'100%'}} src={require('../../assets/images/3071357.svg').default} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="login-login-card">
                        <div style={{ color: '#215EE9', fontSize: 20 }}>Sidentifier</div>
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