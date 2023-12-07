import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import { baseUrl } from '../constants/constants';

const Events = () => {
    const url= baseUrl + "/events/all";
    const [Events,SetEvents]=useState({});
    const [isloading,setisloading]=useState(true);
    const [loaded,setloaded]=useState();

    useEffect(
        ()=>{
            axios.get(url).then(
                (Response) =>{
                    SetEvents(Response.data);
                    setisloading(false);
                    setloaded(true);
                }).catch(function(Error){
                        setisloading(false);
                        setloaded(false);
                })
        },[url]
    )

    function getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'}) +" - "+ date.toLocaleDateString(locale, {month: 'short', day: '2-digit'})+" - "+date.toLocaleDateString(locale, {year: "numeric"}) ;
    }

    return (
        <div className='events'>
            <h4>Events</h4>
            <div className="events-container">
                {
                    isloading === true ? 
                    <h4>Loading Events...</h4> : 
                    (
                        Events.data === undefined ? 
                        loaded === false ? 
                        <h4>Can't Get Events , Maybe Network Problem </h4> : 
                        <h4>No Events</h4> :
                        Events.data.map(
                            (Event)=>(
                                <Link className='event my-4 text-decoration-none' key={Event._id} to={"/events/" + Event._id}>
                                    <div className="events-event-inf" key={Event._id}>
                                        <h5>{Event.title}</h5>
                                        <span>{Event.location}</span>
                                        <p>{getDayName(new Date(Event.date))}</p>
                                    </div>
                                </Link>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Events