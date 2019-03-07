import React from 'react';

import './Chapter.css'
class Chapter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {msg : props.msg }

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("clicker");
    }
    render() {
        const button = <button onClick={this.handleSubmit} type="submit" value="Démarrez" align="center">Démarrez</button>;

        return (
        <div >
                <h1>Chapter {this.state.msg}</h1>
                <div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
                    <br />
                    <br />
                    {button}
                </div>
            </div>

        )
    }

}

export default Chapter;

