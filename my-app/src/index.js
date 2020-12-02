import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
  <>
    <Header></Header>
    <Router className="">
      <>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login}/>
        <Route path="/shop-detail" component={ShopDetail} />
      </>
    </Router>
    <Footer></Footer>
  </>,
  document.getElementById('root')
);

