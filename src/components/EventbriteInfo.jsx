import React, { Component } from 'react';

//Ebrite token.. we should store this elsewhere
const token = "PUEDRFSKYLE6Z5YEBRVN";

var ticketmasterEventArray = []
var eventbriteEventArray = []
var ticketmaster_query_1 = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=W1pcXuKqQdPy3aAzokBdFdcfQYOtx8Zb";

var eventbrite_query_1 = `https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.latitude=36.162663&location.longitude=-86.781601&token=${token}&expand=venue`

export class EventbriteInfo extends Component {

    state = {
        ticketmasterEventList: [],
        eventbriteEventList: []
    };


    getTicketmasterConcertInfo = () => {
        fetch(ticketmaster_query_1)
            .then(results => results.json())
            .then(allConcerts => {
                allConcerts._embedded.events.forEach(concert => {
                    // console.log(concert)


                    let INPUT_OBJ = {
                        type: "",
                        name: "",
                        location: "",
                        details: ""
                    }
                    INPUT_OBJ.type = "Concerts";
                    INPUT_OBJ.name = concert.name;
                    INPUT_OBJ.location = concert._embedded.venues[0].name;
                    INPUT_OBJ.details = concert.classifications[0].genre.name;

                    ticketmasterEventArray.push(INPUT_OBJ)
                })
                this.setState({ ticketmasterEventList: ticketmasterEventArray })
            })
        // console.log(INPUT_OBJ)
    }

    getEventbriteConcertInfo = () => {
        fetch(eventbrite_query_1)
            .then(response => response.json())
            .then(data => {
                console.log("Data", data)
                data.events.forEach(event_item => {

                    console.log(event_item) //testing

                    const eventDate = this.date_convert(event_item.start.local)
                    //Define Object that will be passed to DOM builder
                    let INPUT_OBJ = {
                        type: "",
                        name: "",
                        location: "",
                        details: ""
                    }
                    INPUT_OBJ.type = "Events"
                    INPUT_OBJ.name = event_item.name.text;
                    INPUT_OBJ.location = event_item.venue.address.address_1;
                    if (INPUT_OBJ.location === null) {
                        INPUT_OBJ.location = "To Be Announced"
                    }
                    INPUT_OBJ.details = eventDate; //converted above, using date_convert

                    eventbriteEventArray.push(INPUT_OBJ)
                })
                this.setState({ eventbriteEventList: eventbriteEventArray })
            })
    }
    date_convert(dateString) {
        //Ex. input "2019-04-24T19:00:00"
        //console.log(dateString)
        let yr = dateString.substring(0, 4)
        let mo = dateString.substring(5, 7)
        let da = dateString.substring(8, 10)
        return (`${mo}-${da}-${yr}`)
    }


    componentDidMount() {
        this.getTicketmasterConcertInfo();
        this.getEventbriteConcertInfo();

    }

    render() {
        console.log("Event List in State :", this.state.eventbriteEventList)

        return (
            <>
            <div >
                {this.state.ticketmasterEventList.map((event, i) => {
                    return (
                        <ul key={i} style={{backgroundColor:"dodgerblue", margin:"3em"}}>
                            <h4 key={event.name}> NAME : {event.name}</h4>
                            <p key={event.location}> LOCATION : {event.location}</p>
                            <p key={event.type}> TYPE : {event.type}</p>
                            <p key={event.details}> DETAILS : {event.details}</p>
                        </ul>
                    )
                })}
            </div>
            <div >
                {this.state.eventbriteEventList.map((event, i) => {
                    return (
                        <ul key={i} style={{backgroundColor:"peachpuff", margin:"3em"}}>
                            <h4 key={event.name}> NAME : {event.name}</h4>
                            <p key={event.location}> LOCATION : {event.location}</p>
                            <p key={event.type}> TYPE : {event.type}</p>
                            <p key={event.details}> DETAILS : {event.details}</p>
                        </ul>
                    )
                })}
            </div>
            </>
        );
    }
}

export default EventbriteInfo;
