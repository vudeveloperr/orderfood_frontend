import React from 'react';
import ShopSideBar from "./ShopSideBar"

class ShopProduct extends React.Component{
    render(){
        return(
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSideBar></ShopSideBar>
                        </div>
                        <div className="col-lg-9 col-md-7">

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopProduct;