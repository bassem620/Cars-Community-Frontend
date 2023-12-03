import React from 'react';
import "../newsItem.css";

const NewsItem = ({ id, title, body, imageUrl, date }) => {
    
    function getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'}) +" - "+ date.toLocaleDateString(locale, {month: 'short', day: '2-digit'})+" - "+date.toLocaleDateString(locale, {year: "numeric"}) ;
    }

    return (
        <div className='col-md-6 col-lg-4 p-1'>
            <div className="card h-100 m-0" id={id}>
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-dark">{body}</p>
                <p className="card-text">{getDayName(new Date(date))}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;