import React from 'react';

const TemperatureUnit = props => (
        <div className="temperature-unit-block">
            {/* <span className="unit-wrap">
                <input id='unit_c' type="radio" name="unit" className="unit active" defaultChecked/>
                <label htmlFor="unit_c">°C</label>
            </span>
            <span className="unit-wrap">
                <input id='unit_f' type="radio" name="unit" className="unit"/>
                <label htmlFor="unit_f">°F</label>
            </span> */}
{/*  */}
        <span className="unit-wrap">
            {/* <input onChange={this.props.recountDegrees} id="unit-switch" type="checkbox" defaultChecked/> */}
            <input id="unit-switch" type="checkbox" defaultChecked/>
        </span>

        </div>
)

export default TemperatureUnit;