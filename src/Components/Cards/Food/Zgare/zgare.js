import React, { Component } from "react";
import "../../../../App.css";
import ModalImage from "react-modal-image";
import fries from "../../../Images/zgareImages/fries.jpg";
import chickenburger from "../../../Images/zgareImages/hambst.jpg";
import omletmedjath from "../../../Images/zgareImages/omletmedjath.jpg";
import mesuxhuk from "../../../Images/zgareImages/mesuxhuk.png";
import meproshut from "../../../Images/zgareImages/meproshut.jpg";
import qebap from "../../../Images/zgareImages/qebap5.jpg";
import qebap7 from "../../../Images/zgareImages/qebap7.jpg";
import qebap10 from "../../../Images/zgareImages/qebap10.jpg";
import sharri from "../../../Images/zgareImages/plesksharri.jpg";
import steak from "../../../Images/zgareImages/stekpule.jpg";
import burg from "../../../Images/zgareImages/hambpl.jpg";
import chickenmenu from "../../../Images/zgareImages/hambstm.jpg";
import burgermenu from "../../../Images/zgareImages/hambm.jpg";
import pleskavice from "../../../Images/zgareImages/pleskporc.jpg";
import stekimarinuar from "../../../Images/zgareImages/stekimarinuar.jpg";
import steakwithsos from "../../../Images/zgareImages/stekmesos.jpg";
import berxolla from "../../../Images/zgareImages/berxollev.jpg";
import beefsteak from "../../../Images/zgareImages/beefsteak.jpg";
import mishvici from "../../../Images/zgareImages/mishvici.jpg";
import zgareperzier from "../../../Images/zgareImages/zgareeperzier.jpg";
import suxhukshtepie from "../../../Images/zgareImages/suxhukshtepie.jpg";



export default class Burgers extends Component {
  constructor() {
    super();

    this.state = {
      Burger: [
        {
          emri: "POMFRIT PORCION",
          perbersit: "",
          cmimi: "50",
          image: fries,
        },
        {
          emri: "HAMBURGER",
          perbersit: "",
          cmimi: "80",
          image: burg,
        },
        {
          emri: "HAMBURGER ME STEK",
          perbersit: "",
          cmimi: "90",
          image: chickenburger,
        },
        {
          emri: "OMLET ME DJATH",
          perbersit:"",
          cmimi: "100",
          image: omletmedjath,
        },
        {
          emri: "OMLET ME SUXHUK",
          perbersit: "",
          cmimi: "120",
          image: mesuxhuk,
        },
        {
          emri: "OMLET ME PROSHUTË",
          perbersit: "",
          cmimi: "120",
          image: meproshut,
        },
        {
          emri: "5 QEBAP",
          perbersit: "Në prush",
          cmimi: "100",
          image: qebap,
        },
        {
          emri: "7 QEBAP",
          perbersit: "Në prush",
          cmimi: "130",
          image: qebap7,
        },
        {
          emri: "10 QEBAP",
          perbersit: "Në prush",
          cmimi: "160",
          image: qebap10,
        },
        {
          emri: "PLESKAVICË",
          perbersit: "Porcion",
          cmimi: "160",
          image: pleskavice,
        },
        {
          emri: "STEK PULE",
          perbersit: "Stek pule",
          cmimi: "170",
          image: steak,
        },
        {
          emri: "HAMBURGER MENU",
          perbersit: "Hamburger, Pomfrit, Coca Cola",
          cmimi: "160",
          image: burgermenu,
        },
        {
          emri: "HAMBURGER ME STEK MENU",
          perbersit: "Hamburger, Pomfrit, Coca Cola",
          cmimi: "170",
          image: chickenmenu,
        },
        {
          emri: "PLESKAVICË SHARRI",
          perbersit: "Porcion",
          cmimi: "180",
          image: sharri,
        },
        {
          emri: "STEK I MARINUAR",
          perbersit: "Stek pule i marinuar ",
          cmimi: "200",
          image: stekimarinuar,
        },
        {
          emri: "SUXHUK SHTËPIE",
          perbersit: "Suxhuk",
          cmimi: "230",
          image: suxhukshtepie,
        },
        {
          emri: "STEK ME SOS",
          perbersit: "Stek pule me sos këpurdhash",
          cmimi: "240",
          image: steakwithsos,
        },
        {
          emri: "BËRXOLLË VIÇI",
          perbersit: "Bërxollë viçi me garnir",
          cmimi: "430",
          image: berxolla,
        },
        {
          emri: "BIFTEK",
          perbersit: "Biftek me sos këpurdhash dhe garnir",
          cmimi: "750",
          image: beefsteak,
        },
        {
          emri: "MISH VIÇI",
          perbersit: "Mish nga viçi",
          cmimi: "450",
          image: mishvici,
        },
        {
          emri: "ZGARË E PËRZIER",
          perbersit: "Bërxollë, Stek pule, Suxhuk",
          cmimi: "440",
          image: zgareperzier,
        },
        
      ],
    };
  }

  render() {
    return (
      <div>
        <h3>Burgers</h3>
        <hr />
        <div className="row">
          {this.state.Burger.map((items) => (
            <div className="col-md-4">
              <div className="card">
                <ModalImage
                  className="card-img-top"
                  small={items.image}
                  large={items.image}
                  alt="Burgers!"
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
