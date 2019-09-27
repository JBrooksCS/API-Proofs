import React, { Component } from 'react';

export class DarkSky extends Component {



    state = {

        currently : "rad",
        hourly : "rad",
        daily : "rad",
    };

    //variables
    // w_obj = "";

    

    weatherFetcher = (latitude, longitude) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/41a1128648549ffc3dbd383b9f821df6/${latitude},${longitude}`)
            .then(result => result.json())
            .then(obj => {
                let WEATHER_OBJ = {
                    "currently": "",
                    "hourly": "",
                    "daily": ""
                }
                //let weatherArray = [];
                WEATHER_OBJ.currently = obj.currently.summary;
                WEATHER_OBJ.hourly = obj.hourly.summary;
                WEATHER_OBJ.daily = obj.daily.summary;

                this.setState( 
                        {
                        currently : WEATHER_OBJ.currently,
                        hourly : WEATHER_OBJ.hourly,
                        daily : WEATHER_OBJ.daily 
                        });
            })
    }
    componentDidMount(){
        this.weatherFetcher(36.1627, -86.7816);
    }

    render() {
        // console.log("w_obj = ", this.state.currently)
        return (
            <div>
                <h3>WEATHER IN NASHVILLE</h3>
                <p>Currently, it's looking {this.state.currently.toLowerCase()}.</p>
                <p>It looks like it will be {this.state.hourly.toLowerCase()}.</p>
                <p>Looking ahead, expect {this.state.daily.toLowerCase()}</p>
                {/* <p>Nashville is {w_obj ? w_obj.currently : "rad"}</p> */}
            </div>
        );
    }
}

export default DarkSky;
