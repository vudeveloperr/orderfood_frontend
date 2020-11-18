import React from 'react';


class PanelPoster extends React.Component{
    render(){
        return(
            <div className="hero__item" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/hero/banner.jpg'})`}}>
            </div>
        );
    }
}
export default PanelPoster;