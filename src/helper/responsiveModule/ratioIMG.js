import React from "react";
import "../../scss/responsiveimg.scss";

export default function ResponsesiveIMG(props) {
    return (
        <div className="ratio-container">
            <div style={{ paddingTop: `${props.ratio}` }} className="ratio-group">
                <img src={props.src} alt={props.alt} />
            </div>
        </div >
    )
}