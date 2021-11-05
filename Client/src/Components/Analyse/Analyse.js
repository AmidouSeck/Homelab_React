import React, { useEffect, useState } from "react";
import "./Analyse.css";
import Card from "./Card";
import DB from "../DB.json";
import CardRight from "./CardRight";

const Analyse = (props) => {
    
    const initialState = {
        cards : []
    }
    const [state,setState] = useState(initialState);

    useEffect(()=>{
        const keys = Object.keys(DB);
        const cards = [];
        keys.forEach(key => {
            const data = DB[key];
            cards.push(<Card title={data.title} image={data.image}/>)
        })
        setState({
            ...state,
            cards : cards
        })
    },[]);

    return (
        <span>
            <div className="main">
                <div style={{background : "white"}}>
                <img src="../icons/3568984.jpg" style={{height : 500}}/>
                </div>
                <div>choisissez le laboratoire dans lequel vous voulez effectuer votre analyse</div>
                <div>
                    <img src="../icons/arrow.png" style={{
                        position : "absolute",
                        left : 150,
                        top : "90%",
                        height : 150,
                        width : 140
                    }}/>
                </div>
            </div>
            <section className="hospitals">
                <div className="left">
                    <div className="searchbox">
                        <div style={{ fontSize: 25, marginTop: 15 }}>affiner votre recherche</div>
                        <div><input style={{width:"90%"}} className="search-input" type="text" placeholder="Rechercher une analyse" /></div>
                        <div className="switch">
                            <div style={{ zIndex: 2 }}>Proche de chez moi</div>
                            <div style={{ zIndex: 2 }}>Moins cher</div>
                            <div className="toggle">
                            </div>
                        </div>
                        <div>
                            <button className="valider">
                                Valider
                            </button>
                        </div>
                    </div>
                    {state.cards}
                </div>
                <div>
                </div>
                <div className="right">
                    <div>les mieux notes
                        <ul>
                            <li className="rating"><img src="./icons/star.png" /></li>
                            <li className="rating"><img src="./icons/star.png" /></li>
                            <li className="rating"><img src="./icons/star.png" /></li>
                            <li className="rating"><img src="./icons/star (1).png" /></li>
                            <li className="rating"><img src="./icons/star (1).png" /></li>
                        </ul>
                    </div>
                    <div>it is a long established fact that you will be distracted by the readable</div>
                    
                    <CardRight image={DB.institutPasteur.image}/>
                    <CardRight image={DB.fann.image}/>
                </div>
            </section>
        </span>

    )
}
export default Analyse;