import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar.jsx";

const Header = () => (
    <div className="header" style = {{
        background: `color:red`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">We Design and Develop</h1>
                    <p className="para__text">We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
                    <a href = "#" className="btn btn__blue">contact us</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;