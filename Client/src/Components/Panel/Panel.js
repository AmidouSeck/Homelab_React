import React, { useEffect, useState } from "react";
import "./Panel.css";
import PanelAnalyse from "./PanelAnalyse";
import Results from "./Results";
import popWindow from "./popUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons'

const Panel = (props) => {
    const initialState = {
        seeResults: false,
        labo: null,
        type: null,
        date: null,
        popUpShowing : false
    }
    const [state, setState] = useState(initialState);

    document.body.style.overflow = "hidden";
    useEffect(() => {
        return function () {
            document.body.style.overflow = "auto";
        }
    });


    const togglePopUp = event => {
        setState({
            ...state,
            popUpShowing : !state.popUpShowing
        })
    }   
    return (
        <div>
            <div className="panel-container">
                <div className="panel-left">
                    <div className="panel-left-card">
                        <div style={{ alignItems: "center", display: "grid", gridTemplateRows: "1fr 1fr", justifyItems: "center" }}>
                            <div>
                                <img style={{ width: 90, height: 90, borderRadius: "50%" }} alt="" src={require('../../assets/images/Nihamo-Sakho-blogueuse.jpeg').default} />
                            </div>
                            <div>Astou Sarr</div>
                            <div>38ans</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "repeat(5,1fr);" }}>
                            <div>
                                <span style={{ color: "black" }}>Prenom </span> : <span style={{ color: "grey" }}>Asou</span>
                            </div>
                            <div>
                                <span style={{ color: "black" }}>Nom </span> : <span style={{ color: "grey" }}>Sarr</span>
                            </div>
                            <div>
                                <span style={{ color: "black" }}>Adresse </span> : <span style={{ color: "grey" }}>Thiaroye Gare</span>
                            </div>
                            <div>
                                <span style={{ color: "black" }}>N Telephone </span> : <span style={{ color: "grey" }}>773007740</span>
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
                    <span>
                        {
                            <div className={"popUp"} style={{top : state.popUpShowing ? "50%" : "150%"}}>
                                <div className="popUp-Container">
                                    <FontAwesomeIcon icon={faTimes} style={{marginLeft : 5,color : "#215EE9",left : "10px",top : "10px",fontSize : 30,position : "absolute"}} onClick={(e) => togglePopUp(e) }/>
                                    <div style={{fontSize : 20}}>Analyses Impayes</div>
                                    <div style={{fontSize : 14}}>Veuillez payer pour voir le resultat de vos analyses</div>
                                    <div>
                                        <button className="valider" style={{width : "350px",borderRadius : 17}}>Choisir un moyen de payement</button>
                                    </div>
                                    <div style={{display : "grid",gridTemplateColumns : "1fr 1fr 1fr",gridColumnGap : 15}}>
                                        <div>
                                            <img src="../icons/logo_doc.png" style={{width : 50,height : 50,borderRadius: "50%"}}/>
                                        </div>
                                        <div>
                                            <img src="../icons/télécharger.png" style={{width : 50,height : 50,borderRadius: "50%"}}/>
                                        </div>
                                        <div>
                                            <img src="../icons/etablissementon5410.jpg" style={{width : 50,height : 50,borderRadius: "50%"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </span>
                    {state.seeResults ?
                        <Results panelState={state} />
                        :
                        <div className="panel-right" style={{ boxShadow: "none" }}>
                            <PanelAnalyse panelState={state} setPanelState={setState} />
                            <PanelAnalyse panelState={state} setPanelState={setState} cardTitle={"Analyse en cours"} />
                            <PanelAnalyse panelState={state} setPanelState={setState} cardTitle={"Analyse a venir"} />
                            <PanelAnalyse panelState={state} setPanelState={setState} cardTitle={"Analyses Impayes"} togglePopUp={togglePopUp} mode={2} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Panel;