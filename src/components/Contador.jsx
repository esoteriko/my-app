import React, {Component} from 'react';

class Contador extends React.Component{
    constructor(){
        super();
        this.state = {contador:0};
    }
    aumentarContador = () => {        
        this.setState({contador: this.state.contador + 1});
      }
    reducirContador = () => {
        this.setState({contador: this.state.contador - 1 });
    }
    render(){
        return(
            <div>
                <h1>Aumento y Decremento</h1>
                <button onClick={this.reducirContador}>-</button>
                <span>{this.state.contador}</span>
                <button onClick={this.aumentarContador}>+</button>
            </div>
        );
    }
}

export default Contador;
