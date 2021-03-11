import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import caj from "../../../Images/hotDrinksImages/CAJ.jpg";
import nesquick from "../../../Images/hotDrinksImages/nesquick.jpg";



export default class Cakes extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "SMOOTHIE BOWL",
          perbersit: "Thick blend of frozen and healthy fruits, topped with artfully decorated fruits and nuts",
          cmimi: "140",
          image: caj,
        },
        {
          emri: "SNICKERS BARS",
          perbersit: "Oats, Almonds, Dates, Cinnamon, Panut Butter, Chocolate",
          cmimi: "50",
          image: nesquick,
        },
        {
          emri: "RASPBERRY BAR",
          perbersit: "Oats, Almonds, Dates, Cinammon, Raspberry",
          cmimi: "50",
          image: nesquick,
        },
        {
          emri: "APPLE CAKE",
          perbersit: "Apple Jam, Cream and White Chocolate Crust",
          cmimi: "80",
          image: nesquick,
        },
        {
          emri: "PEAR CAKE",
          perbersit: "Pear Jam, Cream and White Chocolate Crust",
          cmimi: "80",
          image: nesquick,
        },
        {
          emri: "EXOTIC CAKE",
          perbersit: "Exotic Jam, Cream and Chocolate Crust",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "CHOCO CHEESECAKE",
          perbersit: "Cheesecake Cream, Chocolate Cracker Crumbs",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "SNICKERS",
          perbersit: "Snickers Cream filled with Peanuts and Chocolate Chunks",
          cmimi: "80",
          image: nesquick,
        },
        {
          emri: "AMANDIA",
          perbersit: "White Chocolate, fill Cream with Almonds and Peanuts",
          cmimi: "80",
          image: nesquick,
        },
        {
          emri: "FOREST FRUIT CHEESECAKE",
          perbersit: "White Chocolate filling topped with forest fruit Jam and Coconut",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "EXOTIC CHEESECAKE",
          perbersit: "White Chocolate filling topped with exotic fruit Jam and Coconut",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "GREEN FOREST",
          perbersit: "Pistachio and Peanut Cream, Forest Fruit, Jam and Chocolate",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "ROCHER",
          perbersit: "Nutella cream mixed with Chocolate Chunks and Hazelnut",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "OREO CAKE",
          perbersit: "Orea Cream, Chocolate topping with Oreo Crumbs base",
          cmimi: "70",
          image: nesquick,
        },
        {
          emri: "BLACK FOREST",
          perbersit: "Dark Chocolate, Cream Mousse, Forest Fruit Jam",
          cmimi: "70",
          image: nesquick,
        },
       
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Cakes</h3>
        <hr />
        <div className="row">
          {this.state.Desert.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Pije të nxehta!"
                />
                <div className="card-body">
                  <div>
                    <h5 className="card-title">{items.emri}</h5>
                    <hr />
                    <p
                      style={{
                        fontSize: "12px",
                        letterSpacing: "1px",
                        fontStyle: "italic",
                      }}
                    >
                      {items.perbersit}
                    </p>
                    <footer className="blockquote-footer">
                      {items.cmimi} Den
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
