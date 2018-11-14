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
          <h2>Hola Lu</h2>
        </div>
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <Hola nombre="Laura"/>
          <Contador/>
          <TodoApp/>
        </div>
      </div>
    );
  }  
}


export default App;
