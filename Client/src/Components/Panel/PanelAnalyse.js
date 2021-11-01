import React from "react";
import "./PanelAnalyse.css";

const PanelAnalyse = (props) => {
    return (
        <div className="PanelAnalyse">
            <div>Resultats analyse</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <div>
                    <div className="title">
                        Type
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                </div>
                <div>
                    <div className="title">
                        Date
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                </div>
                <div>
                    <div className="title">
                        Laboratoire
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
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