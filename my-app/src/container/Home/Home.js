import React from 'react';
import Categories from '../../components/HomeBodyComponent/Categories'
import Feature from '../../components/HomeBodyComponent/Feature';
import Panel from '../../components/PanelComponents/Panel';

import AllSlide from '../../components/HomeBodyComponent/AllSlide';

class Home extends React.Component{
    render(){
        return(
            <>
                <Panel></Panel>
                <Categories></Categories>
                <Feature></Feature>
            </>
        );
    }
}

export default Home;