import React from "react";
import "./popUp.css";

const popUp = (props) => {
    return (
        <div className={"popUp"} style={{top : props.popUpShowing ? "50%" : "150%"}}>
                                hello world
        </div>
    )
}

export default popUp;