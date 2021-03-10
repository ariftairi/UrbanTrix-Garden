import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import espreso from "../../../Images/kafeImages/espreso.jpg";
import macchiato from "../../../Images/kafeImages/macchiato.jpg";
import bigmacchiato from "../../../Images/kafeImages/bigmacchiato.jpg";
import cappuccino from "../../../Images/kafeImages/cappuccino.jpg";
import nescafe from "../../../Images/kafeImages/nescafe.png";
import nescafecold from "../../../Images/kafeImages/nescafecold.jpg";



export default class Coffee extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "ESPRESO",
          perbersit: "",
          cmimi: "30",
          image: espreso,
        },
        {
          emri: "MACCHIATO",
          perbersit: "",
          cmimi: "30",
          image: macchiato,
        },
        {
            emri: "MACCHIATO E MADHE",
            perbersit: "",
            cmimi: "40",
            image: bigmacchiato,
          },
          {
            emri: "CAPPUCCINO",
            perbersit: "",
            cmimi: "30",
            image: cappuccino,
          },
          {
            emri: "CAPPUCCINO E MADHE ",
            perbersit: "",
            cmimi: "50",
            image: cappuccino,
          },
          {
            emri: "NESCAFE",
            perbersit: "",
            cmimi: "40",
            image: nescafe,
          },
          {
            emri: "NESCAFE E FTOHTË",
            perbersit: "",
            cmimi: "80",
            image: nescafecold,
          },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Kafe</h3>
        <hr />
        <div className="row">
          {this.state.Desert.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="kafe!"
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
