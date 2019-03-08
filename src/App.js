import React, { Component } from 'react';

//import logo from './logo.svg';

import logo from './Images/Viseo.png';

import './App.css';

import NameForm from './NameForm.js';

import Chapter from './Chapter.js';
import Section from './Section.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { renderChild: true, renderChapter: false, renderSection : false,renderNextSection:false};
        this.handleChildUnmount = this.handleChildUnmount.bind(this);
        this.handleChapterUnmount = this.handleChapterUnmount.bind(this);
    }
    handleChildUnmount() {
        this.setState({ renderChild: false, renderChapter: true, renderSection : false});
    }
    handleChapterUnmount() {
        this.setState({ renderChild: false, renderChapter: false, renderSection : true});
    }

    handleSectionUnmount() {
        this.setState({ renderChild: false, renderChapter: false, renderSection : false, renderNextSection : true});
    }

    render() {
        const section = [ <Section num="1" txt1="IDE" txt2="Gradle" key="1" unmountSection={this.handleSectionUnmount} /> , <Section num="2" txt1="IDE" txt2="Gradle" key="2"/> , <Section num="3" txt1="IDE" txt2="Gradle" key="3" /> ];
        let name = localStorage.getItem('username');
        const handleSection = () =>
        {
            console.log("Chapter 1");
        }
        console.log('nom' + name);
        let i =0;
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
                    {this.state.renderChild ? <NameForm unmountMe={this.handleChildUnmount} /> : null}
                    {this.state.renderChapter ? <Chapter msg="1" unmountChapter={this.handleChapterUnmount} section={["Section 1", "Section 2","Section 3"]}/> : null}
                    {this.state.renderSection ? section[i++] : null}
                    {this.state.renderNextSection ? section[i++] : null}

                </div>
            </div>
        );
    }
}

export default App;
