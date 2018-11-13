import React, {Component} from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>Hola Luser{1 + 1}</h1>
        <h2>{this.props.nombre === 'Laura' ? `Ave ${this.props.nombre}` : 'Tú no eres Laura'}</h2>
      </div>
    );
  }
}


export default App;
