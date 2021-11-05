import React from "react";
import "./SignUp.css";

const SignUp = (props) => {
    return (
            <div className="container">
                <div className="signup-card">
                <div style={{width: '100%', height:'100%'}} className="left">
                    <div style={{width: '100%', height:'100%'}} className="content">
                        <div className="imageBg">
                            <img style={{width: '100%', height:'100%'}} src={require('../../assets/images/3071357.svg').default} alt=""/>
                        </div>
                    </div>
                </div>
                    <div className="right">
                        <div className="signup-signup-card">
                            <div style={{ color: '#215EE9', fontSize: 20 }}>S'inscrire</div>
                            <div className="myInput">
                                <div>Email</div>
                                <div><input placeholder="email" type="text" name id /></div>
                            </div>
                            <div className="myInput">
                                <div>Mot De Passe</div>
                                <div><input placeholder="mot de passe" type="text" name id /></div>
                            </div>
                            <div className="myInput">
                                <div>confirmation Mot De Passe</div>
                                <div><input placeholder="confirmation mot de passe" type="text" name id /></div>
                            </div>
                            <div>
                                <button className="connect">Connexion</button>
                            </div>
                            <div>
                                Deja un compte ? <a href="/login" style={{ color: '#215EE9' }}>Sidentifier</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default SignUp;