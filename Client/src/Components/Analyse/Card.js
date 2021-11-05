import React from "react";

const Card = (props) => {

    return(
        <div className="card">
                        <div className="sub-card">
                            <div className="sub-card-left">
                                <img className="sub-card-left-icon" src={props.image} />
                            </div>
                            <div className="sub-card-right">
                                <div>
                                    {props.title}
                                    <ul>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                    </ul>
                                </div>
                                <div>+221-234-65-34</div>
                                <div>{`AV ${props.title} Dakar`}</div>
                            </div>
                        </div>
                        <div>
                            <button className="valider" style={{borderRadius : 17,width : 320, height: 30 }}>
                                Choisir
                            </button>
                        </div>
                    </div>
    )
}

export default Card;