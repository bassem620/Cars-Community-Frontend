import React, { useEffect, useState } from 'react'
import Cars from '../components/CarBox'
import axios from 'axios'
import { baseUrl } from '../constants/constants';

const Home = () => {
    const [cars, setCars] = useState(null);

    useEffect( _ => {
        axios.get(baseUrl + "/cars/all")
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
                    <h4 className='text-center'>{cars === null ? "Loading..." : "No cars found"}</h4>
                }
            </div>
        </div>
    )
}

export default Home