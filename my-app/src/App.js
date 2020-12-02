import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter } from "react-router-dom";
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';

import Home from './container/Home/Home';
import Shop from './container/Shop/Shop';
import Login from './container/Account/Login';
import ShopDetail from './container/ShopDetail/ShopDetail';
import Signup from './container/Account/Signup';

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./css/style.css";
import "./css/elegant-icons.css";
import "./css/new.css";
import "./sass/_header.scss";
import "./sass/_responsive.scss";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/login.css";
import "./css/nice-select.css"

export class App extends Component {
    render() {
        return (
            
            <div className="App">
                <Header></Header>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/login" component={Login} />
                        <Route path="/shop-detail" component={ShopDetail} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </BrowserRouter>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;

// ReactDOM.render(
//     <>
//         <Header></Header>
//         <Router>
//             <div className="App">
//                 <Route path="/" exact component={Home} />
//                 <Route path="/shop" component={Shop} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/shop-detail" component={ShopDetail} />
//                 <Route path="/signup" component={Signup} />
//             </div>
//         </Router>
//         <Footer></Footer>
//     </>,
//     document.getElementById('root')
// );

