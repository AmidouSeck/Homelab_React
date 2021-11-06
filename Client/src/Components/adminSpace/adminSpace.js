import React from "react";
import SideNavigation from "./../SideNavigation/SideNavigation";
import { Col, Row } from "reactstrap";

const adminSpace = (props) => {
    const styles = {
        contentDiv: {
          display: "flex",
        },
        contentMargin: {
          marginLeft: "10px",
          width: "100%",
        },
      };
    return(
        <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
          <h1 style={{ padding: "20%" }}>This is Content Area</h1>
        </div>
      </div>
    )
}


export default adminSpace;