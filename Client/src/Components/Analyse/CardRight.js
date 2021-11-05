import React from "react";

const CardRight = (props) => {
    return (
        <div className="right-card">
            <div className="right-card-left">
                <img src={props.image} className="right-card-icon" />
            </div>
            <div className="right-card-right">
                <div>lorem impsum</div>
                <div><ul>
                    <li className="rating"><img src="./icons/star.png" /></li>
                    <li className="rating"><img src="./icons/star.png" /></li>
                    <li className="rating"><img src="./icons/star.png" /></li>
                    <li className="rating"><img src="./icons/star (1).png" /></li>
                    <li className="rating"><img src="./icons/star (1).png" /></li>
                </ul>
                </div>
                <div>
                    <button className="valider">
                        Valider
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CardRight;