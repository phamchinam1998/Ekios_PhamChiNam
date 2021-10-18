import React from "react";
import "../scss/Homepage/category.scss";
import category1 from '../assets/newarrival/category-1.jpg';
import category2 from '../assets/newarrival/category-2.jpg';
import category3 from '../assets/newarrival/category-3.jpg';
import category4 from '../assets/newarrival/category-4.jpg';
import category5 from '../assets/newarrival/category-5.jpg';
import category6 from '../assets/newarrival/category-6.jpg';
import category7 from '../assets/newarrival/category-7.jpg';
import category8 from '../assets/newarrival/category-8.jpg';
import { Button } from "antd";
import ResponsesiveIMG from "../helper/responsiveModule/ratioIMG";
const categoryimg = [category1, category2, category3, category4, category5, category6, category7, category8];

export default function Category() {

    return (
        <>
            <div className="category container">
                <h2 className="divider">Category</h2>
                <div className="category-list">
                    {categoryimg.map((src, index) =>
                        <div key={index} className="category-item ">
                            <ResponsesiveIMG src={src} ratio="81%" alt="" />
                            <Button className="category-btn">
                                Artwork
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}