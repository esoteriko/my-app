import React, { Component } from 'react';
import Hola from './Hola';
import Contador from './Contador';



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
        </div>
      </div>
    );
  }  
}


export default App;
