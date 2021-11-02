import React, { useEffect, useState } from "react";
import "./PanelAnalyse.css";
import myData from "./Data.json";

const PanelAnalyse = (props) => {

    const initialState = {
        types : [],
        labos : [],
        dates : []
    }
    const [state,setState] = useState(initialState);
    useEffect(()=>{
        let types = state.types;
        let labos = state.labos;
        let dates = state.dates;
        for(let i = 0; i < 10; i++)
        {    
            let type = myData.types[Math.floor(Math.random()*myData.types.length)];
            let labo = myData.Laboratoire[Math.floor(Math.random()*myData.Laboratoire.length)];
            let start = new Date(2020, 0, 1);
            let end = new Date();
            let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            console.log(labos,types,dates);

            labos.push(<div>{labo}</div>);
            types.push(<div>{type}</div>);
            dates.push(<div>{d.toLocaleDateString()}</div>);
        }
        setState({
            ...state,
            types : types,
            labos : labos,
            dates : dates
        });
    },[myData]);

    return (
        <div className="PanelAnalyse">
            <div>Resultats analyse</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <div>
                    <div className="title">
                        Type
                    </div>
                    {state.types}
                </div>
                <div>
                    <div className="title">
                        Date
                    </div>
                    {state.dates}
                </div>
                <div>
                    <div className="title">
                        Laboratoire
                    </div>
                    {state.labos}
                </div>
            </div>
            <span>
                <button className="panel-expand">
                    consulter
                </button>
            </span>
        </div>
    )
}

export default PanelAnalyse;