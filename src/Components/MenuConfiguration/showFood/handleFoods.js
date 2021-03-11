import React, { Component } from 'react'

import Coffee from '../../Cards/CakesAndSweets/Coffee/Coffee'
import JuicesAndSmoothies from '../../Cards/CakesAndSweets/JuicesAndSmoothies/JuicesAndSmoothies'
import OtherDrinks from '../../Cards/CakesAndSweets/OtherDrinks/OtherDrinks'



export default class HandleFoods extends Component {
    constructor() {
        super()
        this.state = {
            CoffeeState: true,
            JuicesAndSmoothiesState: true,
            OtherDrinksState: true,
            
        }
    }

    // Show All
    allButtonHandler = () => {
        this.setState({
            CoffeeState: true,
            JuicesAndSmoothiesState: true,
            OtherDrinksState: true,
        })
    }


    // Coffee
    CoffeeButtonHandler = () => {
        this.setState({
            CoffeeState: true,
            JuicesAndSmoothiesState: false,
            OtherDrinksState: false,

        })
    }

    // Juices and Smoothies
    JuicesAndSmoothiesButtonHandler = () => {
        this.setState({
            CoffeeState: false,
            JuicesAndSmoothiesState: true,
            OtherDrinksState: false,
        })
    }

    // Other Drinks
    OtherDrinksButtonHandler = () => {
        this.setState({
            CoffeeState: false,
            JuicesAndSmoothiesState: false,
            OtherDrinksState: true,
        })
    }

 


    render() {

        // importing cards classes
        const CoffeeMenu = <Coffee />
        const JuicesAndSmoothiesMenu = <JuicesAndSmoothies />
        const OtherDrinksMenu = <OtherDrinks />
     
       

        return (
            <div>
                <div className="menu-buttons">
                    <button onClick={this.allButtonHandler} type="button" className="btn btn-primary">All</button>
                    <button onClick={this.CoffeeButtonHandler} type="button" className="btn btn-primary">Coffee</button>
                    <button onClick={this.JuicesAndSmoothiesButtonHandler} type="button" className="btn btn-primary">JuicesAndSmoothies</button>
                    <button onClick={this.OtherDrinksButtonHandler} type="button" className="btn btn-primary">Other Drinks</button>
                    
                    

                </div>


                {/* show Coffee class */}
                { this.state.CoffeeState ? <div>{CoffeeMenu}</div> : null}

                {/* show JuicesAndSmoothies class */}
                { this.state.JuicesAndSmoothiesState ? <div>{JuicesAndSmoothiesMenu}</div> : null}

                {/* show OtherDrinks class */}
                { this.state.OtherDrinksState ? <div>{OtherDrinksMenu}</div> : null}

            </div >
        )
    }
}
