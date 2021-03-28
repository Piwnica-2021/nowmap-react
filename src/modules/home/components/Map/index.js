import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker";
import "./styles.scss";

class Map extends Component {
    render() {
        return (
            <div className="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyAUUR3rmebpIm98TxMmXkPZy6wjn2IOfV8"}}
                    defaultCenter={{lat: 50.0640, lng: 19.9276}}
                    defaultZoom={12}
                >
                    {this.props.posts.map((post, index) => {
                        return (
                            <Marker
                                lat={post.latitude}
                                lng={post.longitude}
                                name="My Marker"
                                color="blue"
                            />
                        )
                    })}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
