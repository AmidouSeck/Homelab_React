import React, { useEffect, useState } from "react";
import "./PanelAnalyse.css";
import myData from "./Data.json";

const PanelAnalyse = (props) => {

    const initialState = {
        types : [],
        labos : [],
        dates : [],
        results : [],
        open : false,
        background : myData.backgrounds[Math.floor(Math.random()*myData.backgrounds.length)]
    }
    const [state,setState] = useState(initialState);

    const togglePanel = (info)=>{
        props.setPanelState({
            ...props.panelState,
            ...info,
            seeResults : !props.panelState.seeResults
        })
    }

    useEffect(()=>{
        let types = [];
        let labos = [];
        let dates = [];
        let results = []
        for(let i = 0; i < 10; i++)
        {    
            let type = myData.types[Math.floor(Math.random()*myData.types.length)];
            let labo = myData.Laboratoire[Math.floor(Math.random()*myData.Laboratoire.length)];
            let start = new Date(2020, 0, 1);
            let end = new Date();
            let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            console.log(labos,types,dates);

            labos.push(<div key={`${labo}-${i}`}>{labo}</div>);
            types.push(<div key={`${type}-${i}`}>{type}</div>);
            dates.push(<div key={`${d}-${i}`}>{d.toLocaleDateString()}</div>);
            results.push(<div className="vres" onClick={()=>{togglePanel({
                labo : labo,
                type : type,
                date : d.toLocaleDateString()
            })}}>Voir resultats</div>)
        }
        setState({
            ...state,
            types : types,
            labos : labos,
            dates : dates,
            results : results
        });
    },[]);

    useEffect(()=>{
        console.log("state change",state);
    },[]);

    return (
        <div className="PanelAnalyse" style={{height : state.open ? "370px" : "70px",background : `${state.background}` }}>
            <div style={{fontSize : 18,marginBottom : 17}}>
                {props.cardTitle ? props.cardTitle : "Resultats Analyses"}
                </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                <div>
                    <div className="title">
                        Type
                    </div>
                    <span className="results">
                    {state.types}
                    </span>
                </div>
                <div>
                    <div className="title">
                        Date
                    </div>
                    <span className="results">
                    {state.dates}
                    </span>
                </div>
                <div>
                    <div className="title">
                        Laboratoire
                    </div>
                    <span className="results">
                    {state.labos}
                    </span>
                </div>
                <div>
                    <div className="title">
                        resultats
                    </div>
                    <span className="results">
                    {state.results}
                    </span>
                </div>
            </div>
            <span>
                <button style={{top : state.open ? "92%" : "87%"}} className="panel-expand" onClick={()=>setState({...state,open : !state.open})}>
                    {state.open ? "fermer" : "consulter"}
                </button>
            </span>
        </div>
    )
}

export default PanelAnalyse;