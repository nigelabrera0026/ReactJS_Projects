import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";
import Logo from "./images/logo512.png";

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={Logo} 
                alt="React Logo"
                className="nav-icon" 
                />
                <h3 className="nav--log_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}