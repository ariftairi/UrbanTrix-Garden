import React, { Component } from 'react'
import ModalImage from "react-modal-image";
import margarita from "../../../Images/pizzaImages/margarita3.jpg"
import paprika from "../../../Images/pizzaImages/paprika.jpg"
import salam from "../../../Images/pizzaImages/salami3.jpg"
import fungi from "../../../Images/pizzaImages/fungi3.jpg"
import veg from "../../../Images/pizzaImages/veg.jpg"
import proshute from "../../../Images/pizzaImages/proshut3.jpg"
import suxhuk from "../../../Images/pizzaImages/suxhuk3.jpg"
import tono from "../../../Images/pizzaImages/tonno3.jpg"
import stek from "../../../Images/pizzaImages/stek3.jpg"
import mix from "../../../Images/pizzaImages/perzier3.jpg"
import stinet from "../../../Images/pizzaImages/stinet.jpg"
import djathra from "../../../Images/pizzaImages/4djathrat3.jpg"
import biftek from "../../../Images/pizzaImages/biftek.jpg"
import frutadeti from "../../../Images/pizzaImages/frutad3.jpg"
import ulqin from "../../../Images/pizzaImages/ulqin3.jpg"
import ruccola from "../../../Images/pizzaImages/rucola3.jpg"



export default class Pizza extends Component {

    constructor() {
        super();

        this.state = {
            Pizza: [
                {
                    emri: "PIZZA MARGARITA",
                    perbersit: "Salcë domatesh, Kaçkavall",
                    cmimi: "160",
                    image : margarita
                },
                {
                    emri: "PIZZA PAPRIKA",
                    perbersit: "Salcë domatesh, Kaçkavall, Speca",
                    cmimi: "180",
                    image : paprika
                },
                {
                    emri: "PIZZA SALAMI",
                    perbersit: "Salcë domatesh, Kaçkavall, Salamë",
                    cmimi: "180",
                    image : salam
                },
                {
                    emri: "PIZZA FUNGI",
                    perbersit: "Salcë domatesh, Kaçkavall, Këpurdha",
                    cmimi: "180",
                    image : fungi
                    
                },
                {
                    emri: "PIZZA VEGJETARIANE",
                    perbersit: "Salcë domatesh, Kaçkavall, Speca, Brokoli, Këpurdha",
                    cmimi: "200",
                    image : veg
                },
                {
                    emri: "PIZZA PROSHUTE",
                    perbersit: "Salcë domatesh, Kaçkavall, Proshutë",
                    cmimi: "220",
                    image : proshute
                },
                {
                    emri: "PIZZA SUXHUK",
                    perbersit: "Salcë domatesh, Kaçkavall, Suxhuk Bosne",
                    cmimi: "220",
                    image : suxhuk
                },                
                {
                    emri: "PIZZA TONO",
                    perbersit: "Salcë domatesh, Kaçkavall, Tono, Qepë",
                    cmimi: "220",
                    image : tono
                },
                {
                    emri: "PIZZA ME STEK",
                    perbersit: "Salcë domatesh, Kaçkavall, Stek",
                    cmimi: "240",
                    image : stek
                },
                {
                    emri: "PIZZA E PËRZIER",
                    perbersit: "Salcë domatesh, Kaçkavall, Proshutë, Salamë",
                    cmimi: "240",
                    image : mix
                },
                {
                    emri: "PIZZA 4 STINËT",
                    perbersit: "Salcë domatesh, Kaçkavall, Broccoli, Perime",
                    cmimi: "240",
                    image : stinet
                },
                {
                    emri: "PIZZA SUXHUK-RUCCOLA",
                    perbersit: "Salcë domatesh, Kaçkavall, Suxhuk, Ruccola",
                    cmimi: "250",
                    image : ruccola
                },
                {
                    emri: "PIZZA 4 DJATHRAT",
                    perbersit: "Salcë domatesh, 4 Lloje djathrash",
                    cmimi: "250",
                    image : djathra
                },
                {
                    emri: "PIZZA ULQIN",
                    perbersit: "Salcë domatesh, Kaçkavall, Proshutë, Suxhuk, Salamë, Këpurdha, Vezë",
                    cmimi: "260",
                    image : ulqin
                },
                {
                    emri: "PIZZA ME BIFTEK",
                    perbersit: "Salcë domatesh, Kaçkavall, Biftek",
                    cmimi: "330",
                    image : biftek
                },
                {
                    emri: "PIZZA ME FRUTA DETI",
                    perbersit: "Salcë domatesh, Kaçkavall, Fruta deti",
                    cmimi: "350",
                    image : frutadeti
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <h3>Pizza</h3>
                <hr />
                <div className="row">
                    {this.state.Pizza.map(items =>
                        <div className="col-md-4">
                            <div className="card">
                                <ModalImage className="card-img-top"
                                    small={items.image}
                                    large={items.image}
                                    alt="Pizza!" />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">{items.emri}</h5>
                                        <hr />
                                        <p style={{ fontSize: "12px", letterSpacing: "1px", fontStyle: "italic" }}>
                                            {items.perbersit}</p>
                                        <footer className="blockquote-footer">{items.cmimi} Den</footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
