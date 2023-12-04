import React from 'react'
import { Link } from 'react-router-dom'

function cars({id, title,imageurl,price}) {
    return (
    <div className="col-12 col-sm-4 col-lg-3 p-1">
        <div className="card w-100 h-100">
            <img src={imageurl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-dark">{price} L.E.</p>
                <div className='d-flex justify-content-between'>
                   <Link to={`/cars/${id}`} className="btn btn-primary">View Info</Link>
                            {/* Favourite SVG */}
                            <button className='favourite-button btn'>
                                ⭐
                                {/* ob2o 8yro L Star Deh B wa7da SVG */}
                            </button>
                        
                            {/* Favourite SVG */}
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default cars