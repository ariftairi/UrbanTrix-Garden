import React, { Component } from 'react'

import Pizza from '../../Cards/Food/Pizza/pizza'
import Pasta from '../../Cards/Food/Pasta/pasta'
import Zgare from '../../Cards/Food/Zgare/zgare'
import Salad from '../../Cards/Food/Salad/salad'
import Desert from '../../Cards/Food/Desert/desert'


export default class HandleFoods extends Component {
    constructor() {
        super()
        this.state = {
            pizzaState: true,
            pastaState: true,
            zgareState: true,
            saladState: true,
            desertState: true,
        }
    }

    // Show All
    allButtonHandler = () => {
        this.setState({
            pizzaState: true,
            pastaState: true,
            zgareState: true,
            saladState: true,
            desertState: true,
        })
    }


    // Pizza
    pizzaButtonHandler = () => {
        this.setState({
            pizzaState: true,
            pastaState: false,
            zgareState: false,
            saladState: false,
            desertState: false,

        })
    }

    // Pasta
    pastaButtonHandler = () => {
        this.setState({
            pizzaState: false,
            pastaState: true,
            zgareState: false,
            saladState: false,
            desertState: false,
        })
    }

    // Zgare
    zgareButtonHandler = () => {
        this.setState({
            pizzaState: false,
            pastaState: false,
            zgareState: true,
            saladState: false,
            desertState: false,
        })
    }

    // Salad
    saladButtonHandler = () => {
        this.setState({
            pizzaState: false,
            pastaState: false,
            zgareState: false,
            saladState: true,
            desertState: false,
        })
    }

    // Desert
    desertButtonHandler = () => {
        this.setState({
            pizzaState: false,
            pastaState: false,
            zgareState: false,
            saladState: false,
            desertState: true,
        })
    }


    render() {

        // importing cards classes
        const pizzaMenu = <Pizza />
        const pastaMenu = <Pasta />
        const zgareMenu = <Zgare />
        const saladMenu = <Salad />
        const desertMenu = <Desert />
       

        return (
            <div>
                <div className="menu-buttons">
                    <button onClick={this.allButtonHandler} type="button" className="btn btn-primary">Gjithë Menuja</button>
                    <button onClick={this.pizzaButtonHandler} type="button" className="btn btn-primary">Pizza</button>
                    <button onClick={this.pastaButtonHandler} type="button" className="btn btn-primary">Pasta</button>
                    <button onClick={this.zgareButtonHandler} type="button" className="btn btn-primary">Zgarë</button>
                    <button onClick={this.saladButtonHandler} type="button" className="btn btn-primary">Sallatë</button>
                    <button onClick={this.desertButtonHandler} type="button" className="btn btn-primary">Desert</button>
                    

                </div>


                {/* show pizza class */}
                { this.state.pizzaState ? <div>{pizzaMenu}</div> : null}

                {/* show pasta class */}
                { this.state.pastaState ? <div>{pastaMenu}</div> : null}

                {/* show zgare class */}
                { this.state.zgareState ? <div>{zgareMenu}</div> : null}

                {/* show salad class */}
                { this.state.saladState ? <div>{saladMenu}</div> : null}

                {/* show desert class */}
                { this.state.desertState ? <div>{desertMenu}</div> : null}


            </div >
        )
    }
}
