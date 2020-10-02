import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';

import Home from './container/Home/Home'
import Shop from './container/Shop/Shop'

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import "./css/style.css";
import "./css/elegant-icons.css";
import "./css/new.css";
import "./sass/_header.scss";
import "./sass/_responsive.scss";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css"

ReactDOM.render(
  <>
    <Header></Header>
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
    <Footer></Footer>
  </>,
  document.getElementById('root')
);

