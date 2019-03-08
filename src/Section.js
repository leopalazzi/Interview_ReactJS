import React from 'react';

import './Section.css'
class Section extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {num : props.num, txt1 : props.txt1, txt2 : props.txt2}
        //this.state = {msg : props.msg }
    }



    handleSubmit(e) {
        e.preventDefault();
        console.log("clicker");
    }
    render()
    {
        const button = <button onClick={this.handleSubmit} type="submit" value="Démarrez" align="center">Démarrez</button>;
        return (
            <div >
                <h1>Section {this.state.num}</h1>
                    <br />
                    <br />
                    <div className="Gris">
                        <h1 className="None"> {this.state.txt1}</h1>
                    </div>
                <div className="Gris">
                    <h1 className="None"> {this.state.txt2}</h1>
                </div>
                <div className="Padding">
                    <div className="btn-group">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
                </div>


            </div>

        )
    }

}

export default Section;

