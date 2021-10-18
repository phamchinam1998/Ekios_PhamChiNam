import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../scss/Homepage/highlight.scss";
import ResponsesiveIMG from "../helper/responsiveModule/ratioIMG";

export default function Highlight({ data }) {
    return (
        <>
            <div className="highlight-container container">
                <h2 className="divider">Highlight</h2>
                <div className="highlight">
                    {data ?
                        <>
                            <div className="highlight-item-container">
                                <div className="highlight-item">
                                    <div className="highlight-img">
                                        <ResponsesiveIMG src={data[0].imageUrl} alt="" ratio="125%" />
                                    </div>
                                    <div className="highlight-info">
                                        <div>
                                            <p className="info-title">{data[0].name}</p>
                                            <div className="tag-group">
                                                <i>Art</i>
                                                <i>Photography</i>
                                                <i>2D</i>
                                            </div>
                                            <p className="edition">Edition 20 of 30</p>
                                            <p className="price-1">2,000 N1</p>
                                            <p className="price-2">~ $500.42</p>
                                            <p className="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
                                            </p>
                                            <Link to="/" className="readmore-btn">Readmore</Link>
                                        </div>
                                        <div className="btn-group">
                                            <Button className="button-1">Buy Now</Button>
                                            <Button>Make Offer</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="recommend">
                                    {data.slice(1).map((data, index) =>
                                        <div key={index} className="recommend-item">
                                            <ResponsesiveIMG src={data.imageUrl} alt="" ratio="92%" />
                                            <div className="recommend-item-info">
                                                <p className="recommend-item-name">NFT Art Name 1</p>
                                                <p className="recommend-item-edition">Edition 20 of 30</p>
                                                <div>
                                                    <i className="recommend-item-price-1">25,000 N1</i>
                                                    <i className="recommend-item-price-2">~ $8,833.42</i>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                        :
                        <div className="empty"  ></div>
                    }
                </div>
            </div>
        </>
    )
}





















