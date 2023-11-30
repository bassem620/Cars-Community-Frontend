import React from 'react'

function cars({title,imageurl,price}) {
    return (
        <div className='cars-container'>
           <div className='image-container'>
            <img src={imageurl} alt=''/>
           </div>
           <div className='card-content'>
           <div className='car-title'>
            <h3>{title}</h3>
           </div>
           <div className='price-container'>
            <p>{price}</p>
           </div>
           <div className='btn'>
            <botton>
                <a>
                    view info 
                </a>
            </botton>
           </div>
           </div>
           
        </div>
    )
}

export default cars