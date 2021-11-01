import React from "react";
import "./Analyse.css";

const Analyse = (props) => {
    return (
        <span>
            <div className="main">
                <div />
                <div>choisissez le laboratoire dans lequel vous voulez effectuer votre analyse</div>
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
                    <div className="card">
                        <div className="sub-card">
                            <div className="sub-card-left">
                                <img className="sub-card-left-icon" src="./icons/82041945_o.jpg" />
                            </div>
                            <div className="sub-card-right">
                                <div>
                                    Institut Pasteur
                                    <ul>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                    </ul>
                                </div>
                                <div>+221-234-65-34</div>
                                <div>36 AV.Pasteur Dakar/Senegal</div>
                            </div>
                        </div>
                        <div>
                            <button className="valider" style={{ height: 30 }}>
                                Choisir
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="sub-card-left">
                                <img className="sub-card-left-icon" src="./icons/82041945_o.jpg" />
                            </div>
                            <div className="sub-card-right">
                                <div>
                                    Institut Pasteur
                                    <ul>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                    </ul>
                                </div>
                                <div>+221-234-65-34</div>
                                <div>36 AV.Pasteur Dakar/Senegal</div>
                            </div>
                        </div>
                        <div>
                            <button className="valider" style={{ height: 30 }}>
                                Choisir
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="sub-card-left">
                                <img className="sub-card-left-icon" src="./icons/82041945_o.jpg" />
                            </div>
                            <div className="sub-card-right">
                                <div>
                                    lorem ipsum
                                    <ul>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star.png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                        <li className="rating"><img src="./icons/star (1).png" /></li>
                                    </ul>
                                </div>
                                <div>+221-234-65-34</div>
                                <div>36 AV.Pasteur Dakar/Senegal</div>
                            </div>
                        </div>
                        <div>
                            <button className="valider" style={{ height: 30 }}>
                                Choisir
                            </button>
                        </div>
                    </div>
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
                    <div className="right-card">
                        <div className="right-card-left">
                            <img src="./icons/82041945_o.jpg" className="right-card-icon" />
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
                    <div className="right-card">
                        <div className="right-card-left">
                            <img src="./icons/82041945_o.jpg" className="right-card-icon" />
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
                    <div className="right-card">
                        <div className="right-card-left">
                            <img src="./icons/82041945_o.jpg" className="right-card-icon" />
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
                    <div className="right-card">
                        <div className="right-card-left">
                            <img src="./icons/82041945_o.jpg" className="right-card-icon" />
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
                </div>
            </section>
        </span>

    )
}
export default Analyse;