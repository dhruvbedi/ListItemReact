var React = require('react');


class ListItem extends React.Component {

constructor(props){
  super(props);

  this.state={

    hide:true

  }

}
toggle() {  
  this.setState({
    hide: !this.state.hide
  });
}


  render(){
    console.log("called");

      return(
      <div style={{"padding":"20px", "border":"2px solid #000", "cursor":"pointer"}}>
      <div onClick={this.toggle.bind(this)}>
      <h1 style={{"color":"gray", "fontWeight":"bold"}}>{this.props.data.name}</h1>
      </div>
      <div>
      {
        !this.state.hide ?
        <div style={{"color":"blue","overflow":"hidden"}}>
        <div>{this.props.data.id}</div>
        <div>{this.props.data.age}</div>
        <div>{this.props.data.phone}</div>
        <div>{this.props.data.hobbies}</div>
        </div> : null
      }
      </div>
      </div>);
  }
}

export default ListItem;
