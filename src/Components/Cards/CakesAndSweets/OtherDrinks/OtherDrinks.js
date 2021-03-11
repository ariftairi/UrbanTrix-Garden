import React, { Component } from "react";
import ModalImage from "react-modal-image";
import aglio from "../../../Images/pastaImages/aleoli3.jpg";


export default class Pasta extends Component {
  constructor() {
    super();

    this.state = {
      Pasta: [
        {
          emri: "NATURAL WATER",
          perbersit: "",
          cmimi: "40",
          image: aglio,
      },
      {
          emri: "MINERAL WATER",
          perbersit: "",
          cmimi: "40",
          image: aglio,
      },
      {
          emri: "COCA COLA",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      {
          emri: "FANTA",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      {
          emri: "STRUMKA",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      {
          emri: "SCHWEPPES",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      {
          emri: "SHWEPPES TONIC",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      {
          emri: "SPRITE",
          perbersit: "",
          cmimi: "50",
          image: aglio,
      },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Other Drinks</h3>
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
