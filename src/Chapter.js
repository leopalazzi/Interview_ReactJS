import React from 'react';

import './Chapter.css'
class Chapter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {msg : props.msg, section : props.section}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    dismiss() {
        this.props.unmountChapter();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.dismiss();
        console.log("clicker");
    }
    render() {
        const button = <button onClick={this.handleSubmit} type="submit" value="Démarrez" align="center">Démarrez</button>;
        let i=0;
        return (
            <form className = "Form" onSubmit={this.handleSubmit}>

            <div >
                <h1>Chapter {this.state.msg}</h1>
                <div>
                <ul>
                    {this.state.section.map(val =><li key={i++}>{val}</li>)}
                </ul>
                    <br />
                    <br />
                    {button}
                </div>
            </div>
            </form>

        )
    }

}

export default Chapter;

