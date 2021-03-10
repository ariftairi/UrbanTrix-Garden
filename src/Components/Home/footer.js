import React, { Component } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="container">
            <span>&copy; 2020 Copyright</span>
          </div>
          <div>
            <span>Powered by</span>
            <a href="http://urbantrix.mk/" target='_blank' rel="noreferrer"> UrbanTrix</a> <br />
            <li className="list-inline-item">
              <a className="btn-floating btn-lg" href="https://www.facebook.com/urbantrix.mk/" target='_blank' rel="noreferrer">
                <i><FaFacebook size={25} /></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-lg" href="https://www.instagram.com/urbantrix.mk/" target='_blank' rel="noreferrer">
                <i><FaInstagram size={25} /></i>
              </a>
            </li>
          </div>
        </footer>
      </div>

    )
  }
}