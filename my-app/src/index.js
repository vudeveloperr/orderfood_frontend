import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';

import Home from './container/Home/Home';
import Shop from './container/Shop/Shop';
import Login from './container/Account/Login';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import "./css/style.css";
import "./css/elegant-icons.css";
import "./css/new.css";
import "./sass/_header.scss";
import "./sass/_responsive.scss";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/login.css"


ReactDOM.render(
  <>
    <Header></Header>
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login}/>
      </div>
    </Router>
    <Footer></Footer>
  </>,
  document.getElementById('root')
);

