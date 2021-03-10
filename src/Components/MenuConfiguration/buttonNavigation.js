import React, { Component } from 'react'
import "./buttonStyle.css"

import HandleFoods from "./showFood/handleFoods"
import HandleDrinks from "./showDrinks/handleDrinks"

import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class ButtonNavigation extends Component {
    constructor() {
        super()
        this.state = {
            selectFood: true,
            selectDrink: false,
        }
    }

    // Food button
    selectFoodHandler = () => {
        this.setState({
            selectFood: true,
            selectDrink: false,
        })
    }

    // Drink button
    selectDrinkHandler = () => {
        this.setState({
            selectDrink: true,
            selectFood: false,
        })
    }

    render() {

        // import classes
        const foodMenu = <HandleFoods />
        const drinkMenu = <HandleDrinks />


        return (
            <div className="container">
                <h5 className="contact">Contact of Pronto <br /></h5> <h4 className="contact"><a href="tel:070707733">070 707 733</a> </h4>
                <div className="social-container">
                    <a href="https://www.facebook.com/prontopizzalounge"
                        className="facebook social" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    &nbsp;&nbsp;
                    <a href="https://www.instagram.com/prontopizzalounge/"
                        className="instagram social" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <hr />
                <h2 className="menu">MENU / МЕНИ</h2>
                <hr />


                {/* FOOD OR DRINKS */}
                <div className="whichOne">
                    <div className="select">
                        <button onClick={this.selectFoodHandler} className="selectFood">USHQIM/ХРАНА</button>
                    </div>
                    <div className="select">
                        <button onClick={this.selectDrinkHandler} className="selectDrink">PIJE/Пијалоци</button>
                    </div>
                </div>

                {/* if food button is clicked */}
                {this.state.selectFood ? foodMenu : null}


                {/* if drink button is clicked */}
                {this.state.selectDrink ? drinkMenu : null}

            </div >
        )
    }
}
