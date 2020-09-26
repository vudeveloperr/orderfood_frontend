import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';


class Shop extends React.Component {
    render() {
        return (
            <>
           <ShopMenu></ShopMenu>
           <ShopBanner></ShopBanner>
           </>
        );
    }
}

export default Shop;