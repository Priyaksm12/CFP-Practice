import React from 'react';
import logo from './logo.png'

class Hello extends React.Component{
    constructor(){
        super()
        this.state = {
            title : 'hello from bridgelabz'
        }
    }
    render(){
        return(
            <div>
                <h1 style={{"color":"red"}}>{this.state.title}</h1>
                <img src={logo} className="logo"/>
            </div>
        );
    }
}
export default Hello;