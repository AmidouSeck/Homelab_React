import React from "react";
import "./Home.css";

const Home = (props) => {
    return (
        <span>
            <section className="home">
                <div className="text">
                    <div style={{ paddingBottom: 15, fontSize: 49, color: 'rgb(43, 43, 43)' }}>Homelab</div>
                    <div style={{ color: 'grey',fontSize : 30 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt illum voluptas voluptatem doloribus temporibus, perferendis amet modi consectetur saepe explicabo aliquam soluta ipsam animi ipsa numquam eos, cupiditate architecto eligendi odit mollitia obcaecati eius similique? Atque aut quae possimus dolore at quibusdam error qui ducimus id iusto eum, ut aperiam hic repellat illo praesentium totam, mollitia dicta odit reiciendis quas consequatur exercitationem. Doloribus nobis iusto quo magni fugiat placeat omnis?</div>
                    <div style={{ paddingTop: 15 }}>
                        <button className="analyse" style={{fontSize : 19}}>
                            <a href="/analyse">
                            Faire une Analyse
                            </a>
                        </button>
                    </div>
                </div>
                <div className="affiche" style={{backgroundImage : "url('../icons/scientist.jpg')"}}>
                    <img src="../icons/time-left.png" className="time" />
                    <img src="../icons/calendar.png" className="calendar" />
                </div>
            </section>
            <section className="services">
                <div className="top">
                    <p>Nos Services</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-logo">
                            <img src="./icons/report.png" />
                        </div>
                        <div className="card-title">Faites vos analyses sans se deplacer</div>
                        <div className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequuntur odio? Sunt, laboriosam consequatur. Eveniet nam dolore tempora sint dolores in officia vel fugit consequatur eius? Quae nisi dolor libero.</div>
                    </div>
                    <div className="card">
                        <div className="card-logo">
                            <img src="./icons/smartphone (1).png" />
                        </div>
                        <div className="card-title">Faites vos analyses sans se deplacer</div>
                        <div className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequuntur odio? Sunt, laboriosam consequatur. Eveniet nam dolore tempora sint dolores in officia vel fugit consequatur eius? Quae nisi dolor libero.</div>
                    </div>
                    <div className="card">
                        <div className="card-logo">
                            <img src="./icons/cash.png" />
                        </div>
                        <div className="card-title">Faites vos analyses sans se deplacer</div>
                        <div className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequuntur odio? Sunt, laboriosam consequatur. Eveniet nam dolore tempora sint dolores in officia vel fugit consequatur eius? Quae nisi dolor libero.</div>
                    </div>
                </div>
            </section>
        </span>

    )
}
export default Home;