import React, { Component } from "react";
import ModalImage from "react-modal-image";
import margarita from "../../../Images/pizzaImages/margarita3.jpg";
import paprika from "../../../Images/pizzaImages/paprika.jpg";
import salam from "../../../Images/pizzaImages/salami3.jpg";
import fungi from "../../../Images/pizzaImages/fungi3.jpg";
import veg from "../../../Images/pizzaImages/veg.jpg";
import proshute from "../../../Images/pizzaImages/proshut3.jpg";
import suxhuk from "../../../Images/pizzaImages/suxhuk3.jpg";
import tono from "../../../Images/pizzaImages/tonno3.jpg";
import stek from "../../../Images/pizzaImages/stek3.jpg";
import mix from "../../../Images/pizzaImages/perzier3.jpg";
import stinet from "../../../Images/pizzaImages/stinet.jpg";
import djathra from "../../../Images/pizzaImages/4djathrat3.jpg";
import ulqin from "../../../Images/pizzaImages/ulqin3.jpg";
import ruccola from "../../../Images/pizzaImages/rucola3.jpg";

export default class Pizza extends Component {
  constructor() {
    super();

    this.state = {
      Pizza: [
        {
          emri: "ESPRESSO",
          perbersit: "",
          cmimi: "40",
          image: margarita,
        },
        {
          emri: "TEA",
          perbersit: "",
          cmimi: "40",
          image: paprika,
        },
        {
          emri: "MACCHIATO",
          perbersit: "",
          cmimi: "40 / 60",
          image: salam,
        },
        {
          emri: "CAPUCCHINO",
          perbersit: "",
          cmimi: "70",
          image: fungi,
        },
        {
          emri: "ICE COFFEE",
          perbersit: "",
          cmimi: "60",
          image: veg,
        },
        {
          emri: "NESCAFE CLASSIC",
          perbersit: "",
          cmimi: "50",
          image: proshute,
        },
        {
          emri: "NESCAFE VANILA",
          perbersit: "",
          cmimi: "60",
          image: suxhuk,
        },
        {
          emri: "NESCAFE CHOCOLATE",
          perbersit: "",
          cmimi: "60",
          image: tono,
        },
        {
          emri: "NESCAFE CARAMEL",
          perbersit: "",
          cmimi: "60",
          image: stek,
        },
        {
          emri: "NESCAFE HAZELNUT",
          perbersit: "",
          cmimi: "60",
          image: mix,
        },
        {
          emri: "ICE CREAM COFFEE",
          perbersit: "",
          cmimi: "70",
          image: stinet,
        },
        {
          emri: "ESPRESSO FREDO",
          perbersit: "",
          cmimi: "70",
          image: ruccola,
        },
        {
          emri: "CAPUCCHINO FREDO",
          perbersit: "",
          cmimi: "70",
          image: djathra,
        },
        {
          emri: "HOT CHOCOLATE",
          perbersit: "",
          cmimi: "70",
          image: ulqin,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Pizza</h3>
        <hr />
        <div className="row">
          {this.state.Pizza.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Pizza!"
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
