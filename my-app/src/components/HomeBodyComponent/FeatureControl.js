import React from 'react'

class FeatureControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {numbers:[{value:"Orange",class:"mixitup-control-active active"},{value:"Orange"}, {value:"Orange"}, {value:"Orange"}]};
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.numbers == nextState){
            return false
        }
        else{
            return true
        }
    }
    click(index){
        var numbers = [{value:"Orange"},{value:"Orange"}, {value:"Orange"}, {value:"Orange"}]
        numbers[index]["class"] = "mixitup-control-active active"
        this.setState({numbers:numbers})
    }

    render() {
        return (
            <div className="featured__controls">
                <ul>
                    {this.state.numbers.map((number,index) => 
                    <li key={index} onClick={()=>{this.click(index)}} class={number.class}>{number.value}</li>)}
                </ul>
            </div>
        );
    }
}

export default FeatureControl;