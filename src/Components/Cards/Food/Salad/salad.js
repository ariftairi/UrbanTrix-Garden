import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import Salad from "../../../Images/saladImages/salad1.jpeg";
import shopska from "../../../Images/saladImages/sallatsh.jpg";
import sallateperzier from "../../../Images/saladImages/sallatp.jpg";
import greke from "../../../Images/saladImages/sallatg.jpg";
import tono from "../../../Images/saladImages/tono.jpeg";
import mozarela from "../../../Images/saladImages/mozarela.jpg";
import verore from "../../../Images/saladImages/sallatv.jpg";

export default class Burgers extends Component {
  constructor() {
    super();

    this.state = {
      Sallata: [
        {
          emri: "SALLATË SHOPE",
          perbersit: "Domate, Kastravec, Djath",
          cmimi: "90",
          image: shopska,
        },
        {
          emri: "SALLATË E PERZIER",
          perbersit: "Lakër, Marullë, Domate, Kastravec, Karrota, Sos i bardhë",
          cmimi: "90",
          image: sallateperzier,
        },
        {
          emri: "SALLATË GREKE",
          perbersit: "Domate, Kastravec, Qepë, Ullinj, Djath",
          cmimi: "90",
          image: greke,
        },
        {
          emri: "SALLATË TONO",
          perbersit: "Marullë, Tono, Qepë",
          cmimi: "110",
          image: tono,
        },
        {
          emri: "SALLATË VERORE",
          perbersit: "Filetë Pule, Marullë, Domate, Kastravec, Karrotë",
          cmimi: "160",
          image: verore,
        },
        {
          emri: "SALLATË MOZARELLA",
          perbersit: "Domate, Mozarella",
          cmimi: "170",
          image: mozarela,
        },

        {
          emri: "SALLATË ULQIN",
          perbersit: "Proshut, Djath, Marullë, Domate, Karrotë, Ulinj",
          cmimi: "170",
          image: Salad,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Sallata</h3>
        <hr />
        <div className="row">
          {this.state.Sallata.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Salad!"
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
