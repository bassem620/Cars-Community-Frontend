import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState(null);

    useEffect( _ => {
        axios.get("https://cars-community-backend.onrender.com/events/all")
            .then( res => setEvents(res.data.data))
            .catch( err => console.log(err));
    }, [])


    return (
        <div className='events'>
            <h4>Events</h4>
            <div className="events-container">
                {
                    events && events.length > 0 ?
                        events.map(event => {
                            return (
                                <Link className='event my-4 text-decoration-none' to={"/events/" + event._id}>
                                    <div
                                    className="events-event-inf"
                                    key={event._id}
                                    >
                                    <h4>{event.title}</h4>
                                    <span>{event.location}</span>
                                    <p>{event.date}</p>
                                    </div>
                                </Link>
                            );
                        })
                    : <h3 className='text-center'>No events found</h3>
                }
            </div>
        </div>
    )
}

export default Events