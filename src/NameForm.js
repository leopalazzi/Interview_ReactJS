import React from 'react';

import './NameForm.css';


class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'Enter a Username' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dismiss() {
        this.props.unmountMe();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.dismiss();
        localStorage.setItem("username",this.state.value);
    }
    render() {
        return (
            <form className = "Form" onSubmit={this.handleSubmit}>
                <div className = "User">
                <label>
                    <input type="text" className="email" color={'yellow'} value={this.state.value} onChange={this.handleChange} placeholder="Type your username"/>
                </label>
                </div>
                <br />
                <br />
                <button type="submit"  align="center" >Valider</button>
            </form>

        );

    }

}

export default NameForm;