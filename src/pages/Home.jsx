import React from 'react'
import Cars from './Cars'
const Home = () => {
    return (
        <div className='home container-lg'>
            <h4 className='fs-3 m-2 text-center'>Cars</h4>
            <div className="row">
                <Cars
                    id={1}
                    title="toktok"
                    imageurl="https://mir-s3-cdn-cf.behance.net/projects/404/940816156947497.Y3JvcCwxMjA3LDk0NCwyMTIsODk.jpg"
                    price="100000"
                />
            </div>
        </div>
    )
}

export default Home