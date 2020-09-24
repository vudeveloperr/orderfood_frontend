import React from 'react';
import FeatureControl from './FeatureControl';
import FeatureItem from './FeatureItem';


class Feature extends React.Component {
    render() {
        return (
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>
                                    Featured Product
                                 </h2>
                            </div>
                            <FeatureControl></FeatureControl>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        <FeatureItem></FeatureItem>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;