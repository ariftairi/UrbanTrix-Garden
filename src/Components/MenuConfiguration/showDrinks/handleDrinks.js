import React, { Component } from 'react'
import Coffee from "../../Cards/Drinks/Coffe/coffe"
import HotDrinks from "../../Cards/Drinks/HotDrinks/hotDrinks"
import ColdDrinks from "../../Cards/Drinks/ColdDrinks/coldDrinks"


export default class HandleDrinks extends Component {
    constructor() {
        super()
        this.state = {
            showCoffe: true,
            showHotDrinks: true,
            showColdDrinks: true,
        }
    }


    // show all drinks
    showALL = () => {
        this.setState({
            showCoffe: true,
            showHotDrinks: true,
            showColdDrinks: true
        })
    }


    // handle coffe button
    coffeButtonHandler = () => {
        this.setState({
            showCoffe: true,
            showHotDrinks: false,
            showColdDrinks: false
        })
    }

    // handle hot button
    hotButtonHandler = () => {
        this.setState({
            showCoffe: false,
            showHotDrinks: true,
            showColdDrinks: false
        })
    }

    // handle cold button
    coldButtonHandler = () => {
        this.setState({
            showCoffe: false,
            showHotDrinks: false,
            showColdDrinks: true
        })
    }


    render() {
        return (
            <div>

                {/* handle buttons */}
                <div className="menu-buttons">
                    <button onClick={this.showALL} type="button" className="btn btn-primary" >Gjithë Pijet</button>
                    <button onClick={this.coffeButtonHandler} type="button" className="btn btn-primary" >Kafe</button>
                    <button onClick={this.hotButtonHandler} type="button" className="btn btn-primary" >Të nxehta</button>
                    <button onClick={this.coldButtonHandler} type="button" className="btn btn-primary" >Të ftohta</button>
                </div>


                {this.state.showCoffe ? <Coffee /> : null}
                {this.state.showHotDrinks ? <HotDrinks /> : null}
                {this.state.showColdDrinks ? <ColdDrinks /> : null}

            </div>
        )
    }
}