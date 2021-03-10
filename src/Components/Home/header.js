import React, { Component } from "react";
import Ulqin from "../Images/log.png";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="TitleDiv">
                        <a href="/">
                            <img src={Ulqin} alt="Logo" width="170" height="150" className="logg"></img></a>
                        <p className="header-title">Pronto</p>
                        <h3 className="category">Pizza & Lounge</h3>
                    </div>
                </div >
            </div >
        )
    }
}