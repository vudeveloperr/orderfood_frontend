import React from 'react';
import PanelSearchBar from './PanelSearchBar';
import PanelMenu from '../PanelComponents/PanelMenu';

class SreachBar extends React.Component {
    render() {
        return (
            <>
                <PanelMenu></PanelMenu>
                <PanelSearchBar></PanelSearchBar>
            </>
        );
    }
}

export default SreachBar;