import React from "react";
import ReactDOM from "react-dom";
import LatestProduct from "./LatestProduct";

class AllSlide extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AllSlide />, rootElement);

export default AllSlide;