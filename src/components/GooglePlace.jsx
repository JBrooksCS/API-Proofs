import React, { Component } from 'react';
import {GooglePlacesAutocomplete} from 'react-google-places-autocomplete';


var places_link = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDnCSgaO5eTXgZ681RclG9_qQnv4sGH8Kw&libraries=places";

export class GooglePlace extends Component {


    render() {
        
        return (
            <div>
            <script type="text/javascript" src={places_link}></script>
            <GooglePlacesAutocomplete
    autocompletionRequest={{
      bounds: [
        { lat: 50, lng: 50 },
        { lat: 100, lng: 100 }
      ],
    }}
  />
            </div>
        );
    }
}

export default GooglePlace;
