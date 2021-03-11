import React, { Component } from "react";

import Coffee from "../../Cards/CakesAndSweets/Coffee/Coffee";
import JuicesAndSmoothies from "../../Cards/CakesAndSweets/JuicesAndSmoothies/JuicesAndSmoothies";
import OtherDrinks from "../../Cards/CakesAndSweets/OtherDrinks/OtherDrinks";

export default class HandleFoods extends Component {
  constructor() {
    super();
    this.state = {
      JuicesAndSmoothiesState: true,
      OtherDrinksState: true,
      CoffeeState: true,
    };
  }

  // Show All
  allButtonHandler = () => {
    this.setState({
      JuicesAndSmoothiesState: true,
      OtherDrinksState: true,
      CoffeeState: true,
    });
  };

  // Coffee
  CoffeeButtonHandler = () => {
    this.setState({
      JuicesAndSmoothiesState: false,
      OtherDrinksState: false,
      CoffeeState: true,
    });
  };

  // Juices and Smoothies
  JuicesAndSmoothiesButtonHandler = () => {
    this.setState({
      JuicesAndSmoothiesState: true,
      OtherDrinksState: false,
      CoffeeState: false,
    });
  };

  // Other Drinks
  OtherDrinksButtonHandler = () => {
    this.setState({
      JuicesAndSmoothiesState: false,
      OtherDrinksState: true,
      CoffeeState: false,
    });
  };

  render() {
    // importing cards classes
    const JuicesAndSmoothiesMenu = <JuicesAndSmoothies />;
    const OtherDrinksMenu = <OtherDrinks />;
    const CoffeeMenu = <Coffee />;

    return (
      <div>
        <div className="menu-buttons">
          <button
            onClick={this.allButtonHandler}
            type="button"
            className="btn btn-primary"
          >
            All
          </button>
          
          <button
            onClick={this.JuicesAndSmoothiesButtonHandler}
            type="button"
            className="btn btn-primary"
          >
            JuicesAndSmoothies
          </button>
          <button
            onClick={this.OtherDrinksButtonHandler}
            type="button"
            className="btn btn-primary"
          >
            Other Drinks
          </button>
          <button
            onClick={this.CoffeeButtonHandler}
            type="button"
            className="btn btn-primary"
          >
            Coffee
          </button>
        </div>

       

        {/* show JuicesAndSmoothies class */}
        {this.state.JuicesAndSmoothiesState ? (
          <div>{JuicesAndSmoothiesMenu}</div>
        ) : null}

        {/* show OtherDrinks class */}
        {this.state.OtherDrinksState ? <div>{OtherDrinksMenu}</div> : null}

         {/* show Coffee class */}
         {this.state.CoffeeState ? <div>{CoffeeMenu}</div> : null}
      </div>
    );
  }
}
