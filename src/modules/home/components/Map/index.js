import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./styles.scss"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: props.visibility,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({visibility: nextProps.visibility});
  }

  render() {
    return (
      <div className="map-container" style={this.state.visibility?{visibility: "visible"}:{visibility: "hidden"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAUUR3rmebpIm98TxMmXkPZy6wjn2IOfV8" }}
          defaultCenter={{ lat: 50.06, lng: 19.93333 }}
          defaultZoom={10}
        />
      </div>
    );
  }
}

export default Map
