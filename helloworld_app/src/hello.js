import React from 'react';


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
            </div>
        );
    }
}
export default Hello;