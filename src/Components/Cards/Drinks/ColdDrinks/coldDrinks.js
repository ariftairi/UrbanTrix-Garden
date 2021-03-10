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










export default class coldDrinks extends Component {
    constructor() {
        super();

        this.state = {
            Desert: [
                {
                    emri: "UJË PA GAZ",
                    perbersit: "",
                    cmimi: "30",
                    image: uje,
                },
                {
                    emri: "UJË ME GAZ",
                    perbersit: "",
                    cmimi: "30",
                    image: ujemegaz,
                },
                {
                    emri: "COCA COLA",
                    perbersit: "",
                    cmimi: "50",
                    image: cola,
                },
                {
                    emri: "FANTA",
                    perbersit: "",
                    cmimi: "50",
                    image: fanta,
                },
                {
                    emri: "STRUMKA",
                    perbersit: "",
                    cmimi: "50",
                    image: strumka,
                },
                {
                    emri: "SCHWEPPES",
                    perbersit: "",
                    cmimi: "50",
                    image: schweppes,
                },
                {
                    emri: "SHWEPPES TONIC",
                    perbersit: "",
                    cmimi: "50",
                    image: tonic,
                },
                {
                    emri: "SPRITE",
                    perbersit: "",
                    cmimi: "50",
                    image: sprite,
                },
                {
                    emri: "LËNG MOLLE",
                    perbersit: "",
                    cmimi: "50",
                    image: lengmolle,
                }
                ,
                {
                    emri: "LËNG VISHNJE",
                    perbersit: "",
                    cmimi: "50",
                    image: lengvishnje,
                },
                {
                    emri: "LËNG PJESHKE",
                    perbersit: "",
                    cmimi: "50",
                    image: lengpjeshke,
                },
                {
                    emri: "LËNG PORTOKALLI",
                    perbersit: "",
                    cmimi: "50",
                    image: lengportokalli,
                },
                {
                    emri: "VIVA",
                    perbersit: "",
                    cmimi: "50",
                    image: viva,
                },
                

            ],
        };
    }

    render() {
        return (
            <div>
                <h3>Pije të ftohta</h3>
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
