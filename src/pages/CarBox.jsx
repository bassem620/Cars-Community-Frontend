import React from 'react'
import { Link } from 'react-router-dom'

function cars({id, title,imageurl,price}) {
    return (
    <div class="col-12 col-sm-4 col-lg-3 p-1">
        <div className="card w-100 h-100">
            <img src={imageurl} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text text-dark">{price} L.E.</p>
                <Link to={`/cars/${id}`} class="btn btn-primary">View Info</Link>
            </div>
        </div>
    </div>
    )
}

export default cars