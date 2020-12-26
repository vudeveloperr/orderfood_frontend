import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {IMAGE_URL, STAT_URL} from '../../consts';


class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], food: []  };
    }

    componentDidMount(){
        axios.get(`${STAT_URL}/v1/food/listrandbycate`)
        .then((response) => {
            if (response.data.error.code === 200){
                this.setState({ data: response.data.data },() => this.setState({food: this.state.data[0].ls_food}))

            } 
        })
        .catch(console.log)
    }

    click = (index) => {
        this.setState({ food: this.state.data[index].ls_food })
    }


    render() {
        return (
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>
                                    Món ăn gợi ý
                                 </h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    {this.state.data.map((item, index) => {
                                        return(
                                        <li key={index} onClick={() => { this.click(index) }} >{item.name_cate}</li>
                                        );
                                    })}
                                        
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {this.state.food.map((item,index) => (
                            <FeatureItem item={item}></FeatureItem>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

class FeatureItem extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="featured__item">
                    <div className="featured__item__pic" style={{ backgroundImage: `url(${IMAGE_URL}${this.props.item.image})` }}>
                        <ul className="featured__item__pic__hover">

                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6>
                            <Link to={`/shop-detail/${this.props.item.id_shop}`}>{this.props.item.full_name}</Link>
                        </h6>

                    </div>
                </div>
            </div>
        );
    }
}
export default Feature;