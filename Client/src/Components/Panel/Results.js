import React, { useEffect } from "react";
import "./Results.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Results = (props) => {

    useEffect(() => {
        console.log("results", props);
    }, []);

    return (
        <div className="results-panel">
            <div>
                <img src="../icons/82041945_o.jpg" style={{height : 150,width : 150,borderRadius : "50%",border:"solid 5px rgb(66 176 255)"}}/>
            </div>
            <div>
                <h4>
                        <span style={{ color: "rgb(66 176 255)" }}>
                        {props.panelState.labo}
                        </span>
                    </h4>
            </div>
            <div style={{ textAlign: "left", justifySelf: "left",marginLeft: 50 }}>

                <h3>
                    <span style={{ color: "rgb(66 176 255)" }}>
                        Type Danalyse :
                    </span>
                    <span>
                        {props.panelState.type}
                    </span>
                </h3>
                <h4>
                    <span style={{ color: "rgb(66 176 255)" }}>
                        Date :
                    </span>
                    <span>
                        {props.panelState.date}
                    </span>
                </h4>
                <h4 style={{color : "grey",paddingRight : 50}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt illum voluptas voluptatem doloribus temporibus, perferendis amet modi consectetur saepe explicabo aliquam soluta ipsam animi ipsa numquam eos, cupiditate architecto eligendi odit mollitia obcaecati eius similique? Atque aut quae possimus dolore at quibusdam error qui ducimus id iusto eum, ut aperiam hic repellat illo praesentium totam, mollitia dicta odit reiciendis quas consequatur exercitationem. Doloribus nobis iusto quo magni fugiat placeat omnis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt illum voluptas voluptatem doloribus temporibus, perferendis amet modi consectetur saepe explicabo aliquam soluta ipsam animi ipsa numquam eos, cupiditate architecto eligendi odit mollitia obcaecati eius similique? Atque aut quae possimus dolore at quibusdam error qui ducimus id iusto eum, ut aperiam hic repellat illo praesentium totam, mollitia dicta odit reiciendis quas consequatur exercitationem. Doloribus nobis iusto quo magni fugiat placeat omnis?
                </h4>
            </div>
            <span>
                <a className="return-button" href="/panel" style={{fontSize : 30}}>
                    <FontAwesomeIcon icon={faArrowLeft} color={"rgb(66 176 255)"}/>
                </a>
            </span>
        </div>
    )
}

export default Results;