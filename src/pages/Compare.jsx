import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Compare = () => {
    const {car1} = useParams();
    const url="https://cars-community-backend.onrender.com/cars/"+car1;
    const [cars,Setcars]=useState({});
    const [isloading,setisloading]=useState(true);
    

    useEffect(
        ()=>{
            axios.get(url).then(
                (Response) =>{
                    Setcars(Response.data);
                    setisloading(false);
                }).catch(function(Error){
                    console.log(Error.Response);
                })
        },[]
    )

    return (
        <div className='compare'>
            {
                isloading==true?
                <div className="compare-part">
                    <div className="compare-part-img"><h4>Loading...</h4></div>
                    <h5 className='my-2'>Loading...</h5>
                    <div className="compare-part-info">
                    Loading...
                    </div>
            </div>
                :
                <div className="compare-part">
                    <img src={cars.data.image} className="compare-part-img"/>
                    <h5 className='my-2'>{cars.data.title}</h5>
                    <div className="compare-part-info">
                    {cars.data.desc}
                    </div>
            </div>
            }
            {/* <div className="compare-part">
                    <img src={cars.data.image} className="compare-part-img"/>
                    <h5 className='my-2'>{cars.data.title}</h5>
                    <div className="compare-part-info">
                    {cars.data.desc}
                    </div>
            </div> */}

            <span className='compare-title'>Compare</span>
            
            <div className="compare-part">
                    <img src='https://i.insider.com/5e9a0cafdcd88c113f7c08b0?width=750&format=jpeg&auto=webp' className="compare-part-img"/>
                    <div className="compare-part-info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aliquam et odit molestias molestiae, harum ullam tempore voluptas beatae unde officiis a vitae consectetur reprehenderit animi delectus, placeat perspiciatis voluptatem?
                    </div>
            </div>

        </div>
    )
}

export default Compare