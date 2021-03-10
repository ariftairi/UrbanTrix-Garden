import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import rafaelo from "../../../Images/desertImages/rafaelo.jpg";
import pannacotta from "../../../Images/desertImages/pannacota.jpg";
import tiramisu from "../../../Images/desertImages/tiramisu.jpg";
import bakllavreth from "../../../Images/desertImages/bakllavreth.jpg";
import boem from "../../../Images/desertImages/boem.jpg";
import karamel from "../../../Images/desertImages/karamel.jpg";
import nutella from "../../../Images/desertImages/nutella.jpg";
import vishnje from "../../../Images/desertImages/vishnje.jpg";
import mango from "../../../Images/desertImages/mango.jpg";
import cheesecake from "../../../Images/desertImages/cheesecake.jpg";
import sheqerpare from "../../../Images/desertImages/sheqerpare.jpg";







export default class Burgers extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "BAKLLAV RRETH",
          perbersit: "",
          cmimi: "20",
          image: bakllavreth,
        },
        {
          emri: "SHEQERPARE",
          perbersit: "",
          cmimi: "30",
          image: sheqerpare,
        },
        {
          emri: "BOEM",
          perbersit: "",
          cmimi: "30",
          image: boem,
        },
        {
          emri: "KARAMEL",
          perbersit: "",
          cmimi: "40",
          image: karamel,
        },
        {
          emri: "NUTELLA",
          perbersit: "",
          cmimi: "40",
          image: nutella,
        },
        {
          emri: "VISHNJE",
          perbersit: "",
          cmimi: "40",
          image: vishnje,
        },
        {
          emri: "MANGO",
          perbersit: "",
          cmimi: "40",
          image: mango,
        },
        {
          emri: "RAFAELO",
          perbersit: "",
          cmimi: "50",
          image: rafaelo,
        },
        {
          emri: "CHEESECAKE",
          perbersit: "",
          cmimi: "50",
          image: cheesecake,
        },
        {
          emri: "PANNA COTTA",
          perbersit: "",
          cmimi: "",
          image: pannacotta,
        },
        {
          emri: "TIRAMISU",
          perbersit: "",
          cmimi: "",
          image: tiramisu,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Desert</h3>
        <hr />
        <div className="row">
          {this.state.Desert.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Desert!"
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
