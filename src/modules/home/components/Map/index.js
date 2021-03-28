import React, { Component } from 'react';
import GoogleMapReact  from 'google-map-react';
import Marker from "../Marker";
import "./styles.scss";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: props.lat,
      lng: props.long,
      index: props.index,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      lat: nextProps.lat,
      lng: nextProps.long,
      index: nextProps.index,
    });
  }

  render() {
    return (
        <div className="map-container">
          <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAUUR3rmebpIm98TxMmXkPZy6wjn2IOfV8" }}
              center={{ lat: this.state.lat, lng: this.state.lng }}
              zoom={12}
          >
            {this.props.posts.map((post, index) => {
              return(
                  <Marker
                      lat={post.latitude}
                      lng={post.longitude}
                      name="My Marker"
                      color={this.state.index == index ? "red": "blue"}
                  />
              )
            })}
          </GoogleMapReact>
        </div>
    );
  }
}

export default Map;
