import React from 'react'
import Cars from './Cars'
const Home = () => {
    return (
        <div className='home'>
            <h4>Cars</h4>
            <Cars 
                title="car name"
                imageurl="https://mir-s3-cdn-cf.behance.net/projects/404/940816156947497.Y3JvcCwxMjA3LDk0NCwyMTIsODk.jpg"
                price="price"
            />
        </div>
    )
}

export default Home