import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/HeaderComponents/Header';

import Home from './container/Home/Home'

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
    <Home></Home>
  </>,
  document.getElementById('root')
);

