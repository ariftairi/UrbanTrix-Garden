import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import uje from "../../../Images/coldDrinksImages/uje.jpg";
import ujemegaz from "../../../Images/coldDrinksImages/ujemegaz.jpg";
import cola from "../../../Images/coldDrinksImages/cola.jpeg";
import fanta from "../../../Images/coldDrinksImages/fanta.jpg";
import strumka from "../../../Images/coldDrinksImages/strumka.jpg";
import schweppes from "../../../Images/coldDrinksImages/schweppes.jpg";
import tonic from "../../../Images/coldDrinksImages/tonic.jpg";
import sprite from "../../../Images/coldDrinksImages/sprite.jpg";
import lengmolle from "../../../Images/coldDrinksImages/lengmolle.jpg";
import lengvishnje from "../../../Images/coldDrinksImages/lengvishnje.jpg";
import lengpjeshke from "../../../Images/coldDrinksImages/lengpjeshke.jpg";
import lengportokalli from "../../../Images/coldDrinksImages/lengportokalli.png";
import viva from "../../../Images/coldDrinksImages/viva.png";










export default class RawSweets extends Component {
    constructor() {
        super();

        this.state = {
            Desert: [
                {
                    emri: "PROTEIN BAR",
                    perbersit: "Cocoa Powder, Oats, Whey Protein, Dates",
                    cmimi: "60",
                    image: uje,
                },
                {
                    emri: "TWIX",
                    perbersit: "Oats, Almonds, Dates, Peanut Butter, Vanilla, Agava ",
                    cmimi: "80",
                    image: ujemegaz,
                },
                {
                    emri: "MINI CAKE",
                    perbersit: "Almonds, Dates, Oats, Chocolate, Raspberry",
                    cmimi: "100",
                    image: cola,
                },
                {
                    emri: "RAW CHOCOLATE",
                    perbersit: "Chocolate, Cocoa, Almonds, Cranberry",
                    cmimi: "100",
                    image: fanta,
                }
                

            ],
        };
    }

    render() {
        return (
            <div>
                <h3>Raw Sweets</h3>
                <hr />
                <div className="row">
                    {this.state.Desert.map((items) => (
                        <div className="col-md-4">
                            <div className="card">
                                <ModalImage
                                    className="card-img-top"
                                    small={items.image}
                                    large={items.image}
                                    alt="Pije të ftohta!"
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
