import React from 'react';
import logo from './logo.png'

class Hello extends React.Component{
    url="https:www.bridgelabz.com/"
    constructor(){
        super()
        this.state = {
            title : 'hello from bridgelabz',
            username : 'friend'
        }
    }
    imageclick = () =>{
            window.open(this.url,'_blank');
    }
    namechange = (event) =>{
        this.setState({username : event.target.value})
    }
    render(){
        return(
            <div>
                
                <h1 style={{"color":"red"}}>hello {this.state.username} from bridgelabz</h1>
                <img src={logo} className="logo" onClick={this.imageclick}/><br/>
                <input type="text" placeholder='Type the Name here...' onChange={this.namechange}/>
            </div>
        );
    }
}
export default Hello;