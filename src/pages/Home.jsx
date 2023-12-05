import React, { useEffect, useState } from 'react'
import Cars from '../components/CarBox'
import axios from 'axios'
import { baseUrl } from '../constants/constants';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [cars, setCars] = useState(null);

    useEffect( _ => {
        axios.get(baseUrl + "/cars/all", {headers: {Authorization: user ? user._id : undefined}})
            .then( res => setCars(res.data.data))
            .catch( err => console.log(err));
    }, [user])

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
                            liked={car?.liked }
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