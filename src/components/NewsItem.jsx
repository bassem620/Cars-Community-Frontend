import React from 'react';
import "../newsItem.css";

const NewsItem = ({ id, title, body, imageUrl }) => {
    return (
        <div className="card" id={id}>
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            </div>
        </div>
    );
};

export default NewsItem;