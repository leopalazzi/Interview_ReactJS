import React, { Component } from 'react';

//import logo from './logo.svg';

import logo from './Images/Viseo.png';

import './App.css';

import NameForm from './NameForm.js';

import Chapter from './Chapter.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { renderChild: true, renderChapter: false };
        this.handleChildUnmount = this.handleChildUnmount.bind(this);
    }
    handleChildUnmount() {
        this.setState({ renderChild: false, renderChapter: true });
    }
    render() {
        let name = localStorage.getItem('username');
        console.log('nom' + name);
        return (
            <div>
                <div className="App">
                    <header className="NameForm">
                        <h1 className="Interview"> Interview </h1>
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                </div>
                <br />
                <br />
                <br />
                <div className="Form">
                    {this.state.renderChapter ? <Chapter msg="1" /> : null}
                    {this.state.renderChild ? <NameForm unmountMe={this.handleChildUnmount} /> : null}
                </div>
            </div>
        );
    }
}

export default App;
