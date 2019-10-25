import React, {Component} from 'react';

class TemperatureUnit extends Component {
    state = {
        isCelsius: ''
    }


    onChangeHendler = (e) => {
        //var raaa = e.target.childNodes.name;
        let ch = e.target.checked;
        let val = e.target.value;
        console.log(ch);
        console.log(val);
    }

    onChangeHendler2 = (e) =>  {
        this.setState ({isCelsius: e.target.value})
        console.log(this.state.isCelsius);
    }

    render() {
        return(
            <label htmlFor="unit-switch" className="unit-wrap">
                {/* <input onChange={this.props.recountDegrees} id="unit-switch" type="checkbox" defaultChecked/> */}
                <input onChange={this.onChangeHendler} id="unit-switch" type="checkbox"/>
                <p>
                    <span id="metric-unit">°C</span>
                    <span id="imperial-unit">°F</span>
                </p>
                <a className="slide-button"></a>
                {/* <input id="mz" onChange={this.onChangeHendler2} value={this.state.isCelsius}/> */}
            </label>
        );
    }
}

export default TemperatureUnit;