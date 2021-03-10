import React, { Component } from 'react'
import './App.css';
import Footer from './Components/Home/footer';
import Header from './Components/Home/header';
import { BrowserRouter as Router, Route } from "react-router-dom"
import ButtonNavigation from './Components/MenuConfiguration/buttonNavigation';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="container">
            <Route exact path="/" component={ButtonNavigation} />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

