import React from 'react';
import './formInput.css';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    render() {
        return(
            <label>
            <input name={this.props.name} type={this.props.type} value={this.state.text} onChange={this.handleChange} label={this.props.label} />
            <span>{this.props.label}</span>
            </label>
        );
    }
}

export default FormInput;