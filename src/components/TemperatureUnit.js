import React, {Component} from 'react';

class TemperatureUnit extends Component {
    state = {
        isCelsius: ''
    }


    onChangeHendler = (e) => {
        this.setState = ({
            isCelsius: e.target.value
        })
        console.log(this.state.isCelsius);
    }

    render() {
        return(
            <div className="temperature-unit-block">
                {/* <span className="unit-wrap">
                    <input id='unit_c' type="radio" name="unit" className="unit active" defaultChecked/>
                    <label htmlFor="unit_c">°C</label>
                </span>
                <span className="unit-wrap">
                    <input id='unit_f' type="radio" name="unit" className="unit"/>
                    <label htmlFor="unit_f">°F</label>
                </span> */}

            <span className="unit-wrap">
                {/* <input onChange={this.props.recountDegrees} id="unit-switch" type="checkbox" defaultChecked/> */}
                {/* <input id="unit-switch" type="checkbox" checked={this.state.isCelsius}/> */}
                <input onChange={this.onChangeHendler} value={this.state.isCelsius} type="text" placeholder="enter..."/>
            </span>

            </div>
        );
    }
}

export default TemperatureUnit;