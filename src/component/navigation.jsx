import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../scss/button.scss";
import "../scss/Homepage/navigation.scss";
import NFTlogo from "../assets/nft-logo.png";
const { Search } = Input;

export default function Navigation() {
    const [searchToggle, setSearchToggle] = useState(false);
    const [toggle, setToggle] = useState(false)

    const ToggleMenu = () => {
        setToggle(prev => !prev);
    }
    const ToggleSearchBar = () => {
        setSearchToggle(prev => !prev);
    }

    return (
        <>
            <div className={`nav-bar container ${toggle ? "toggle-on" : "toggle-off"}`}>
                <div className="logo">
                    <img src={NFTlogo} alt="" />
                    <h3 className="logo-2">yourlogo</h3>
                </div>
                <i onClick={ToggleMenu} className={toggle ? "fa fa-times toggle-btn" : "fa fa-bars toggle-btn"} aria-hidden="true"></i>
                <div className="menu">
                    <ul className="left-menu">
                        <li>Home</li>
                        <li>Discover</li>
                        <li>History</li>
                    </ul>
                    <ul className="right-menu">
                        <li className={`search-form ${searchToggle ? "display" : "nodisplay"}`}>
                            <Search placeholder="Search NFT"></Search>
                        </li>
                        <li className="search-btn">
                            <Button onClick={ToggleSearchBar} className="button-1 search"><SearchOutlined />Search</Button>
                        </li>
                        <li >
                            <Button className="button-1">Connect Wallet</Button>
                        </li>
                        <li id="binary-logo">
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}