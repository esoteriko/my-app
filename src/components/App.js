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
          <h2>Hola Luser</h2>
        </div>
        <div className="App-intro">          
          <Hola nombre={Date()}/>
          <Contador/>
          <TodoApp/>
          <Ejemplo/>
          <Ejemplo1/>
          <Click/>
          <Condicional/>
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

 class Condicional extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       variable: false
     };
     this.method = this.method.bind(this);     
   }
   method() {
    this.setState({variable: true});
  }
   render(){
     if(this.state.variable){
     return(
       <div>
         <h1>Condicional</h1>
         <button onClick={this.method}>accion</button>
         <h1>UwU bien</h1>
       </div>
     );}
     else{
       return(
         <div>
           <h1>Condicional</h1>
           <button onClick={this.method}>accion</button>
           <h1>UwU mal</h1>
         </div>
       );
     }
   }
 }



export default App;
