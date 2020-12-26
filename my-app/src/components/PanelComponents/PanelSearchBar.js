import React from 'react';
import Contact from './Contact';

import { STAT_URL } from '../../consts';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class PanelSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' }, categories: { id: 0, name: 'Tất cả' } };
        this.state.data = [];
    }

    toggle() {
        if (this.state.style.opacity !== 0) {
            this.setState({ style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' } });
        }
        else {
            this.setState({ style: { opacity: 1 } });
        }
    }

    componentDidMount() {
        axios.get(`${STAT_URL}/v1/food/cate`)
            .then(
                (response) => {
                    if (response.data.error.code === 200) {
                        console.log(response)
                        this.setState({ data: response.data.data });
                    }
                }
            )
            .catch()
    }

    search = (e) => {
        e.preventDefault();
        if (this.state.categories.id === 0) {
            this.props.history.push(`/food?name=${this.state.inputValue || ''}`);
        }
        else {
            this.props.history.push(`/food?cate=${this.state.categories.id}&name=${this.state.inputValue || ''}`);
        }
    }


    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    changeCategories(item) {
        this.setState({ style: { opacity: 0, height: '0px', padding: '0px', overflow: 'hidden' }, categories: item });
    }
    render() {
        return (
            <>
                <div className="hero__search">
                    <div className="hero__search__form">
                        <form>
                            <div className="hero__search__categories" onClick={() => { this.toggle() }}>
                                {this.state.categories.name}
                                <span className="arrow_carrot-down"></span>
                            </div>
                            <input type="text" placeholder="Tìm kiếm sản phẩm ?" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} ></input>
                            <button className="site-btn" onClick={this.search}>Tìm kiếm</button>
                        </form>
                    </div>
                    <div className="newul">
                        <ul style={{ ...{ transition: 'opacity ease-in-out 1s 0s', zIndex: 1 }, ...this.state.style }}>
                            <li><a onClick={() => { this.changeCategories({ id: 0, name: 'Tất cả' }) }}>Tất cả</a></li>
                            {this.state.data.map((item) => (
                                <li><a onClick={() => { this.changeCategories(item) }}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <Contact number="0978004683"></Contact>
                </div>
            </>
        );
    }
}

export default withRouter(PanelSearchBar);