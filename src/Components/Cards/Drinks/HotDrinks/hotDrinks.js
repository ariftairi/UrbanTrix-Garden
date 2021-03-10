import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import caj from "../../../Images/hotDrinksImages/CAJ.jpg";
import nesquick from "../../../Images/hotDrinksImages/nesquick.jpg";



export default class hotDrinks extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "ÇAJ",
          perbersit: "",
          cmimi: "30",
          image: caj,
        },
        {
          emri: "NESQUIK",
          perbersit: "",
          cmimi: "50",
          image: nesquick,
        },
       
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Pije të nxehta</h3>
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
