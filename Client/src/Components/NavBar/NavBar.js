import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {

    const location = useLocation();
    const initialState = {
        path : null
    }
    const links = [<div style={{ color: '#215EE9' }}><a href="/login">Sidentifier</a></div>,
    <div><a href="/signup">
        <button style={{width : 120,height : 40,borderRadius : 30,border: "none",background : "#215EE9",color : "white",cursor : "pointer"}}>
        Sinscrire
        </button>
        </a></div>];
    const profile = [<div style={{display : "flex"}}>
        Noftifications
        <FontAwesomeIcon icon={faBell} style={{marginLeft : 5,color : "#215EE9"}}/>
    </div>,
    <div>
        <img src="../icons/65646572251.jpg" style={{ height: 50, width: 50, borderRadius: "50%", justifySelf: "center", alignSelf: "center" }} />
    </div>];

    const [state,setState] = useState(initialState);

    useEffect(()=>{
        setState({
            ...state,
            path : location.pathname.split("/")[1]
        });    
    },[])

    useEffect(()=>{
        console.log(state);
    },[state]);

    return(
        <nav>
            <div className="logo-container">
                <img src="../icons/logo.png" className="logo" />
                <a href="/" style={{ marginLeft: 5,textDecoration : "none",color : "inherit" }}>Homelab</a>
            </div>
            <div className="icons">
                <div><a href="/">Home</a></div>
                <div>Services</div>
                <div>Contact</div>
                {
                    state.path == "panel" ?
                    profile
                    : links
                }
            </div>
        </nav>

    )
}
export default NavBar