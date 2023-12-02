import React from 'react';
import "../newsItem.css";

const NewsItem = ({ id, title, body, imageUrl }) => {
    return (
        <div className='col-md-6 col-lg-4 p-1'>
            <div className="card h-100" id={id}>
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;