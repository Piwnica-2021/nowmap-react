import React, { Component } from 'react';
import GoogleMapReact  from 'google-map-react';
import Marker from "../Marker";
import "./styles.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: props.visibility,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.visibility !== nextProps.visibility) {
      return {
        visibility: nextProps.visibility
      };
    }
    return null;
  }

  render() {
    return (
      <div className="map-container" style={this.state.visibility?{visibility: "visible"}:{visibility: "hidden"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAUUR3rmebpIm98TxMmXkPZy6wjn2IOfV8" }}
          defaultCenter={{ lat: 50.06, lng: 19.93333 }}
          defaultZoom={12}
        >
        {this.props.posts.map((post, index) => {
          return(
            <Marker
                lat={post.latitude}
                lng={post.longitude}
                name="My Marker"
                color="orange"
              />
          )
        })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map
