import React, { useEffect, useState } from 'react'
import Cars from '../components/CarBox'
import axios from 'axios'

const Home = () => {
    const [cars, setCars] = useState(null);

    useEffect( _ => {
        axios.get("https://cars-community-backend.onrender.com/cars/all")
            .then( res => setCars(res.data.data))
            .catch( err => console.log(err));
    }, [])

    return (
        <div className='home container-lg'>
            <h4 className='fs-3 m-2 text-center'>Cars</h4>
            <div className="row">
                {
                    cars && cars.length > 0 ?
                    cars.map( car => {
                        return <Cars
                            id={car._id}
                            key={car._id}
                            title={car.title}
                            imageurl={car.image}
                            price={car.price}
                        />
                    })
                    :
                    <h3 className='text-center'>No cars found</h3>
                }
            </div>
        </div>
    )
}

export default Home