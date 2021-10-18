import React from "react";
import ResponsesiveIMG from "../helper/responsiveModule/ratioIMG";
import "../scss/Homepage/newarrival.scss";

export default function NewArrival({ title, data }) {

    return (
        <>
            <div className="newarrival container">
                <h2 className="divider">{title}</h2>
                {data ?
                    <div className="newarrival-list">
                        {data.map((img, index) =>
                            <div key={index} className="newarrival-item ">
                                <ResponsesiveIMG src={img.imageUrl} ratio="91%" alt="" />
                                <div className="newarrival-info">
                                    <h4 className="newarrival-info-name">NFT Art Name 1</h4>
                                    <p className="newarrival-info-edition">Edition 20 of 30</p>
                                    <div className="newarrival-item-info-price">
                                        <h4>25,000 N1</h4>
                                        <p>~$8,833.42</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <div className="empty"></div>
                }
            </div>
        </>
    )
}