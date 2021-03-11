import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import espreso from "../../../Images/kafeImages/espreso.jpg";
import macchiato from "../../../Images/kafeImages/macchiato.jpg";




export default class Breakfest extends Component {
  constructor() {
    super();

    this.state = {
      Desert: [
        {
          emri: "CHIA",
          perbersit: "Almond milk, Blueberry, Chia seeds, Fruits, Agave, Cinnamon",
          cmimi: "12",
          image: espreso,
        },
        {
          emri: "OATMEAL",
          perbersit: "Almond milk, ... ,Agave, Cinnamon",
          cmimi: "110",
          image: macchiato,
        },
        
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Breakfest</h3>
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
