import GoogleMapReact from 'google-map-react';
import { useState } from "react";
import styled from "styled-components";

const Map = styled.div`
    
    width: 100%;
    height: 100%;

`


const AnyReactComponent = ({ text }:any) => <div>{text}</div>;

export default ()=>{
    const [coordinates, setCoordinates] = useState({
        lat: 20.997900,
      lng: 105.794423
    })
    const [zoom, setZoom] = useState(11)
    return <Map >
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={coordinates}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={20.997900}
            lng={105.794423}
            text="My Marker"
          />
        </GoogleMapReact>
    
  </Map>
}