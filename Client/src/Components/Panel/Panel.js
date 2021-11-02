import React,{useEffect} from "react";
import "./Panel.css";
import PanelAnalyse from "./PanelAnalyse";

const Panel = (props) => {
    document.body.style.overflow = "hidden";
    useEffect(()=>{
        return function(){
            document.body.style.overflow = "auto";
        }
    })
    return(
        <div>
            <div className="panel-container">
                <div className="panel-left">
                    <div className="panel-left-card">
                        <div style={{alignItems:"center",display : "grid",gridTemplateRows : "1fr 1fr",justifyItems : "center"}}>
                            <div>
                                <img style={{width : 90,height : 90,borderRadius : "50%"}} src="../icons/65646572251.jpg"/>
                            </div>
                            <div>Astou Sarr</div>
                            <div>38ans</div>
                        </div>
                        <div style={{display : "grid",gridTemplateRows : "repeat(5,1fr);"}}>
                            <div>
                                <span style={{color : "black"}}>Prenom </span> : <span style={{color : "grey"}}>Asou</span>
                            </div>
                            <div>
                                <span style={{color : "black"}}>Nom </span> : <span style={{color : "grey"}}>Sarr</span>
                            </div>
                            <div>
                                <span style={{color : "black"}}>Adresse </span> : <span style={{color : "grey"}}>Thiaroye Gare</span>
                            </div>
                            <div>
                                <span style={{color : "black"}}>N Telephone </span> : <span style={{color : "grey"}}>773007740</span>
                            </div>
                            <div>
                                <button className="valider">
                                    Gerer mes informations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-right">
                    <PanelAnalyse/>
                    <PanelAnalyse/>
                    <PanelAnalyse/>
                    <PanelAnalyse/>
                </div>
            </div>
        </div>
    )
}

export default Panel;