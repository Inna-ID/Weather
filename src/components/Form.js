import React, {Component} from 'react';

class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input onChange={this.props.autoCopmlete} type="text" name="city" placeholder="City"/>
                <button className="btn btn-danger">Get the weather</button>
            </form>
        )
    }
}

export default Form;