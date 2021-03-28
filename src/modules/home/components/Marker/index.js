import React, { Component } from 'react';
import './styles.scss';

class Marker extends Component{

  constructor(props){
    super(props)
    this.state = {
      visibility: "hidden",
    }
  }

  render(){
    return (
      <div>
        <div
          className="marker material-icons"
          onMouseOver={() => this.setState({visibility: "visible"})}
          onMouseOut={() => this.setState({visibility: "hidden"})}
             style={{ color: this.props.color, cursor: 'pointer'}}>{this.props.icon}</div>
        <div className="map-label-div">
        {
          this.props.name ?
          <span
            className="map-label-span"
            style={{visibility: this.state.visibility}}>{this.props.name}
          </span>: null
        }
        </div>
      </div>

    )
  }
}

export default Marker;
