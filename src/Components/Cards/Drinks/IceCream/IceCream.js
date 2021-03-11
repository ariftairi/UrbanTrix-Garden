import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import caj from "../../../Images/hotDrinksImages/CAJ.jpg";
import nesquick from "../../../Images/hotDrinksImages/nesquick.jpg";



export default class IceCream extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "YOGHURT",
          perbersit: "",
          cmimi: "35",
          image: caj,
        },
        {
          emri: "OREO",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "HAZELNUT",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "SNICKERS",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "FIG & NUTS",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "FOREST FRUIT",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "CHOCOLATE",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "STRAWBERRY",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "CARAMEL & NUTELLA",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
        {
          emri: "VANILLA",
          perbersit: "",
          cmimi: "35",
          image: nesquick,
        },
       
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Ice Cream</h3>
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
