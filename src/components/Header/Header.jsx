import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state ={
            

    
        };

    }

    render() {
        return (
            <div>
            <h1>Bienvenidos a la {this.props.name}</h1>
            <p className="greeting">{this.state.name}</p>
            </div>
        )
    }
}



