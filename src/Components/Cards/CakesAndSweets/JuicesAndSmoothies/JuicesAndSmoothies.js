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
          emri: "GARDEN JUICE",
          perbersit: "Orange, Apple, Banana",
          cmimi: "80",
          image: bakllavreth,
        },
        {
          emri: "GARDEN FRAPPE",
          perbersit: "Banana, Milk, Honey",
          cmimi: "80",
          image: sheqerpare,
        },
        {
          emri: "IMMUNITY",
          perbersit: "Orange, Ginger, Carrot",
          cmimi: "80",
          image: boem,
        },
        {
          emri: "TROPICAL JUICE",
          perbersit: "Orange, Banana, Pineapple",
          cmimi: "80",
          image: karamel,
        },
        {
          emri: "ORANGE JOY",
          perbersit: "Orange, Lemon, Carrot",
          cmimi: "80",
          image: nutella,
        },
        {
          emri: "GINGER HONEY",
          perbersit: "Ginger, Orange, Apple, Honey",
          cmimi: "90",
          image: vishnje,
        },
        {
          emri: "GINGER BLAST",
          perbersit: "Ginger, Orange, Apple, Lemon",
          cmimi: "90",
          image: mango,
        },
        {
          emri: "MORNING DELIGHT",
          perbersit: "Orange, Grapefruit, Lemon",
          cmimi: "90",
          image: rafaelo,
        },
        {
          emri: "ORANGE SUNSHINE",
          perbersit: "Orange, Turmeric, Apple, Lemon",
          cmimi: "50",
          image: cheesecake,
        },
        {
          emri: "SIMPLE TASTE",
          perbersit: "Green Apple, Pinneapple",
          cmimi: "90",
          image: pannacotta,
        },
        {
          emri: "ICE CREAM FRAPPE",
          perbersit: "Banana, Milk, Honey, Ice Cream ",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "RASPBERRY CRUSHER",
          perbersit: "Raspberry, Banana, Apple",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "STRAWBERRY FUSION",
          perbersit: "Strawberry, Banana, Apple",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "GRAPEFRUIT GOODNESS",
          perbersit: "Grapefruit, Apple, Orange, Pineapple, Mint",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "FIRE ME UP",
          perbersit: "Green Apple, Lemon, Extra Ginger",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "DOUBLE GREEN",
          perbersit: "Green Apple, Kiwi",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "SLIM MIX",
          perbersit: "Citrus, Lemon, Carrots, Green Apple",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "CHERRY SPLASH",
          perbersit: "Cherry, Apple, Banana",
          cmimi: "100",
          image: tiramisu,
        },
        {
          emri: "OREO SMOOTHIE",
          perbersit: "Oreo, Ice Cream, Milk, Banana",
          cmimi: "110",
          image: tiramisu,
        },
        {
          emri: "RED DRAGON",
          perbersit: "Red Berries, Orange, Apple, Banana",
          cmimi: "110",
          image: tiramisu,
        },
        {
          emri: "GREEN PARADISE",
          perbersit: "Apple, Kiwi, Pineapple, Citrus, Lemon",
          cmimi: "120",
          image: tiramisu,
        },
        {
          emri: "BLUEBERRY SMOOTHIE",
          perbersit: "Blueberry, Milk, Ice Cream, Banana",
          cmimi: "130",
          image: tiramisu,
        },
        {
          emri: "STRAWBERRY SHAKE",
          perbersit: "Strawberry, Milk, Ice Cream, Banana",
          cmimi: "130",
          image: tiramisu,
        },
        {
          emri: "BULL'S BERRY SMOOTHIE",
          perbersit: "Red Bull, Strawberry, Raspberry, Orange",
          cmimi: "250",
          image: tiramisu,
        },
        {
          emri: "RED BULL JUICE",
          perbersit: "",
          cmimi: "250",
          image: tiramisu,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Juices and Smoothies</h3>
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
