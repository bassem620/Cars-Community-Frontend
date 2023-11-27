import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const ItemView = () => {
    return (
        <div className='view-item'>
            <h4>Item Name</h4>
            <div className='item-info'>
            <img className='view-item-img' src='https://i1.wp.com/james-henderson.com/wp-content/uploads/2022/01/Charger-006-1024x683.jpg?ssl=1'/>
            <div className="view-item-info">
                <span className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam, dolorem accusamus facere consequuntur quos dolore ab quisquam magnam repudiandae saepe voluptatibus sint officiis nulla, quod doloremque provident nobis voluptates!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia illo est optio magni reprehenderit quod vel blanditiis, quis eaque repellendus temporibus voluptatibus quisquam libero consequatur ipsum sed tempore pariatur.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iste magnam quam nulla temporibus. Et, dolore, quo expedita inventore, pariatur placeat numquam quaerat veniam eius voluptatum architecto. Vel, delectus dolor?
                </span>
                <span className='view-item-price'>
                    Price : <span className='text-danger'>20$</span>
                </span>
                <Link to=""><button className='btn btn-dark my-1'>Compare</button></Link>
            </div>
            </div>
        </div>
    )
}

export default ItemView