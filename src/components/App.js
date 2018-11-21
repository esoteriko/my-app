import React, { Component } from 'react';
import Hola from './Hola';
import Contador from './Contador';
import TodoApp from './TodoApp';



class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
      <div className="App">
        <div className="App-header">        
          <h2>Hola Luser</h2>
        </div>
        <div className="App-intro">          
          <Hola nombre={Date()}/>
          <Contador/>
          <TodoApp/>
          <Ejemplo/>
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
    return(
      <div>{this.state.name}</div>
    );
  }
}


export default App;
