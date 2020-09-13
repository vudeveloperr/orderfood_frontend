import React from 'react';
import Categories from '../../components/HomeBodyComponent/Categories'
import AllSlide from '../../components/HomeBodyComponent/AllSlide';

class Home extends React.Component{
    render(){
        return(
            <>
                <Categories></Categories>
                <AllSlide></AllSlide>
            </>
        );
    }
}

export default Home;