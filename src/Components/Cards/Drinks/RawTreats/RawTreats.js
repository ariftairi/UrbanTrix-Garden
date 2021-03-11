import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import uje from "../../../Images/coldDrinksImages/uje.jpg";
import ujemegaz from "../../../Images/coldDrinksImages/ujemegaz.jpg";
import cola from "../../../Images/coldDrinksImages/cola.jpeg";
import fanta from "../../../Images/coldDrinksImages/fanta.jpg";
import strumka from "../../../Images/coldDrinksImages/strumka.jpg";
import schweppes from "../../../Images/coldDrinksImages/schweppes.jpg";











export default class RawTreats extends Component {
    constructor() {
        super();

        this.state = {
            Desert: [
                {
                    emri: "ALMOND COCONUT",
                    perbersit: "Almonds, Dates, Coconut",
                    cmimi: "30",
                    image: uje,
                },
                {
                    emri: "FERRERO",
                    perbersit: "Hazelnut, Cocoa, Dates",
                    cmimi: "30",
                    image: ujemegaz,
                },
                {
                    emri: "NUTELLA",
                    perbersit: "Hazelnut, Cocoa, Vanilla, Dates",
                    cmimi: "30",
                    image: cola,
                },
                {
                    emri: "INDIAN VANILLA",
                    perbersit: "Indian nuts, Dates, Vanilla",
                    cmimi: "30",
                    image: fanta,
                },
                {
                    emri: "BOUNTY",
                    perbersit: "Coconut, Cocoa, Dates",
                    cmimi: "30",
                    image: strumka,
                },
                {
                    emri: "RASPBERRY",
                    perbersit: "Indian nuts, Raspberry, Dates",
                    cmimi: "30",
                    image: schweppes,
                },
                
                

            ],
        };
    }

    render() {
        return (
            <div>
                <h3>Raw Treats</h3>
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
