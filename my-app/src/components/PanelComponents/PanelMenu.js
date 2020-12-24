import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import axios from 'axios';
import {STAT_URL} from '../../consts';
class PanelMenu extends React.Component {
    constructor(props){
        super(props);
        if (this.props.visible === false){
            this.state = {style : {opacity: 0, height:'0px',padding:'0px', overflow: 'hidden'}};
        }
        else{
        this.state = {style : {opacity:1, display:'block'}};
        }
        this.state.data = [];
    }
    toggleMenu(){
        if(this.state.style.opacity !== 0){
            this.setState({style : {opacity: 0, height:'0px',padding:'0px', overflow: 'hidden'}});
        }
        else{
            this.setState({style : {opacity:1, display:'block'}});
        }
       
    }

    componentDidMount(){
        axios.get(`${STAT_URL}/v1/food/cate`)
        .then(
            (response) => {
                if(response.data.error.code === 200){
                    console.log(response)
                    this.setState({data: response.data.data});
                }
            }
        )
        .catch()
    }

    render() {
        return (
            <div className="col-lg-3">
                <div className="hero__categories">
                    <div className="hero__categories__all" onClick={() => {this.toggleMenu()}}>
                        <FontAwesomeIcon icon={faBars} color="white" />
                        <span>Danh sách</span>
                    </div>
                    <ul style={{...{transition: 'opacity ease-in-out 1s 0s'},...this.state.style}}>
                        {this.state.data.map((item) => (
                            <li>
                                <Link to={`//${item.id}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PanelMenu;