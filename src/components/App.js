import React, { Component } from 'react';
import Hola from './Hola';
import Contador from './Contador';
import TodoApp from './TodoApp';
import Click from './Click';



class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
      <div className="App">
        <div className="App-header">        
          <h2>Hola Lu</h2>
        </div>
        <div className="App-intro">          
          <Hola nombre={Date()}/>
          <Contador/>
          <TodoApp/>
          <Ejemplo/>
          <Ejemplo1/>
          <Click/>
        </div>
      </div>
    );
  }  
}

class Ejemplo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: "Hola, soy un state"
    }
  }
  render(){
    let variable = "Soy una variable de js"
    return(
      <div>
        <h2>{this.state.name}</h2>
        <h2>{variable}</h2>
      </div>
    );
  }
}

class Ejemplo1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "soy un state pasada a una variable"
  }
  }
  render(){
  let variable= this.state.name
    return(
      <div>
        <h3>{variable}</h3>
      </div>
    );
  }
}



export default App;
