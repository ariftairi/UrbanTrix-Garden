import React, { Component } from 'react'
import Breakfest from "../../Cards/Drinks/Breakfest/breakfest"
import IceCream from "../../Cards/Drinks/IceCream/IceCream"
import RawTreats from "../../Cards/Drinks/RawTreats/RawTreats"
import RawSweets from "../../Cards/Drinks/RawSweets/RawSweets"
import Cakes from "../../Cards/Drinks/Cakes/Cakes1"
export default class HandleDrinks extends Component {
    constructor() {
        super()
        this.state = {
            showBreakfest: true,
            showIceCream: true,
            showRawTreats: true,
            showRawSweets: true,
            showCakes: true,
        }
    }


    // show all drinks
    showALL = () => {
        this.setState({
            showBreakfest: true,
            showIceCream: true,
            showRawTreats: true,
            showRawSweets: true,
            showCakes: true,
        })
    }


    // handle breakfest button
    breakfestButtonHandler = () => {
        this.setState({
            showBreakfest: true,
            showIceCream: false,
            showRawTreats: false,
            showRawSweets: false,
            showCakes: false,
        })
    }

    // handle ice cream button
    iceCreamButtonHandler = () => {
        this.setState({
            showBreakfest: false,
            showIceCream: true,
            showRawTreats: false,
            showRawSweets: false,
            showCakes: false,
        })
    }

    // handle raw treats button
    rawTreatsButtonHandler = () => {
        this.setState({
            showBreakfest: false,
            showIceCream: false,
            showRawTreats: true,
            showRawSweets: false,
            showCakes: false,
        })
    }

     // handle raw sweets button
     rawSweetsButtonHandler = () => {
        this.setState({
            showBreakfest: false,
            showIceCream: false,
            showRawTreats: false,
            showRawSweets: true,
            showCakes: false,
        })
    }

      // handle Cakes button
      CakesButtonHandler = () => {
        this.setState({
            showBreakfest: false,
            showIceCream: false,
            showRawTreats: false,
            showRawSweets: false,
            showCakes: true,
        })
    }


    render() {
        return (
            <div>

                {/* handle buttons */}
                <div className="menu-buttons">
                    <button onClick={this.showALL} type="button" className="btn btn-primary" >ALL</button>
                    <button onClick={this.breakfestButtonHandler} type="button" className="btn btn-primary" >BREAKFEST</button>
                    <button onClick={this.iceCreamButtonHandler} type="button" className="btn btn-primary" >ICE CREAM</button>
                    <button onClick={this.rawTreatsButtonHandler} type="button" className="btn btn-primary" >RAW TREATS</button>
                    <button onClick={this.rawSweetsButtonHandler} type="button" className="btn btn-primary" >RAW SWEETS</button>
                    <button onClick={this.CakesButtonHandler} type="button" className="btn btn-primary" >CAKES</button>
                </div>


                {this.state.showBreakfest ? <Breakfest /> : null}
                {this.state.showIceCream ? <IceCream /> : null}
                {this.state.showRawTreats ? <RawTreats /> : null}
                {this.state.showRawSweets ? <RawSweets /> : null}
                {this.state.showCakes ? <Cakes /> : null}

            </div>
        )
    }
}