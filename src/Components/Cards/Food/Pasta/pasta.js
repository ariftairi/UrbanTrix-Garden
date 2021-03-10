import React, { Component } from "react";
import ModalImage from "react-modal-image";
import aglio from "../../../Images/pastaImages/aleoli3.jpg";
import napoli from "../../../Images/pastaImages/napoli.jpg";
import karbonara from "../../../Images/pastaImages/karbonara3.jpg";
import bolognese from "../../../Images/pastaImages/bologneze3.jpg";
import frutadeti from "../../../Images/pastaImages/frutadeti.png";
import arabiata from "../../../Images/pastaImages/arabiata3.jpg";

export default class Pasta extends Component {
  constructor() {
    super();

    this.state = {
      Pasta: [
        {
          emri: "AGLIO E OLIO",
          perbersit: "Vaj ulliri dhe hudhër",
          cmimi: "140",
          image: aglio,
        },
        {
          emri: "ARABIATA",
          perbersit: "Salcë domatesh, Hudhër, Ullinjë, Djegës",
          cmimi: "160",
          image: arabiata,
        },
        {
          emri: "NAPOLI",
          perbersit: "Sallcë domatesh",
          cmimi: "140",
          image: napoli,
        },

        {
          emri: "BOLOGNESE",
          perbersit: "Salcë domatesh, Mish i bluar, Qepë",
          cmimi: "180",
          image: bolognese,
        },
        {
          emri: "KARBONARA",
          perbersit: "Sos këpurdhash, Salcë, Proshutë",
          cmimi: "200",
          image: karbonara,
        },
        {
          emri: "FRUTA DETI",
          perbersit: "Salcë domatesh, Fruta deti",
          cmimi: "260",
          image: frutadeti,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Pasta</h3>
        <hr />
        <div className="row">
          {this.state.Pasta.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Pasta!"
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
