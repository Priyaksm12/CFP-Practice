import React from 'react';
import logo from './logo.png'

class Hello extends React.Component{
    url="https:www.bridgelabz.com/"
    constructor(){
        super()
        this.state = {
            title : 'hello from bridgelabz'
        }
    }
    imageclick = () =>{
            window.open(this.url,'_blank');
    }
    render(){
        return(
            <div>
                <h1 style={{"color":"red"}}>{this.state.title}</h1>
                <img src={logo} className="logo" onClick={this.imageclick}/>
            </div>
        );
    }
}
export default Hello;