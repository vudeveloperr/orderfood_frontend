import React from 'react';
import ShopMenu from '../../components/ShopBodyComponent/ShopMenu';
import ShopBanner from '../../components/ShopBodyComponent/ShopBanner';
import ShopProduct from '../../components/ShopBodyComponent/ShopProduct'

class Shop extends React.Component {
    render() {
        return (
            <>
           <ShopMenu></ShopMenu>
           <ShopBanner></ShopBanner>
           <ShopProduct></ShopProduct>
           </>
        );
    }
}

export default Shop;