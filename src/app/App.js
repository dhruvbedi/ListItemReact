var React = require('react');
var ReactDom = require('react-dom');

import ListItem from './ListItem.js'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {

    }

    this.data1={
      "id" : "One",
      "name" : "ALEX",
      "age": 22,
      "phone" : 9999999999,
      "hobbies" : "Reading,Traveling"
    }

    this.data2={
      "id" : "Two",
      "name" : "BOB",
      "age": 24,
      "phone" : 9999999999,
      "hobbies" : "Camping,Fishing"
    }
    this.data3={
      "id" : "Three",
      "name" : "COBY",
      "age": 21,
      "phone" : 9999999999,
      "hobbies" : "Hockey,Football,Story Telling,Karate"
    }
  }


  render(){
    return(
      <div style = {{"border":"1px solid #ccc","height":"800px","width":"800px","margin":"auto"}}>
        <ListItem data = {this.data1} />
        <ListItem data = {this.data2} />
        <ListItem data = {this.data3} />

      </div>
    )
  }

}

export default App;
