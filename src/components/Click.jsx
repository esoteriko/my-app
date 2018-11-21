import React, {Component} from 'react';

class Click extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "state1"
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        this.setState({name: "state2"});
    }
    render(){
        const styles = {color: 'white', backgroundColor: 'green'}
        return(
            <div style={styles}>
                <h2>{this.state.name}</h2>
                <button onClick={this.addItem}>accion</button>
            </div>
        );
    }
}
export default Click;