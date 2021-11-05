import React from "react";
import "./SignUp.css";

const SignUp = (props) => {
    return (
            <div className="container">
                <div className="signup-card">
                <div className="left">
                    <img src="../icons/login.png" style={{height : "95%",width : "85%",marginLeft : 90}}/>
                </div>
                    <div className="right">
                        <div className="signup-signup-card">
                            <div style={{ color: '#215EE9', fontSize: 20 }}>Sidentifier</div>
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
                                <button className="connect">Sinscrire</button>
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