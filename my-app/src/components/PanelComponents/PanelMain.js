import React from 'react';
import PanelSearchBar from './PanelSearchBar';
import PanelPoster from './PanelPoster';
class PanelMain extends React.Component{
    render(){
        return(
            <div className="col-lg-9">
                <PanelSearchBar></PanelSearchBar>
                <PanelPoster></PanelPoster>
            </div>
        );
    }
}

export default PanelMain;