import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const ItemView = () => {
    return (
        <div className='view-item'>
            {/* <h4>Item Name</h4> */}
            <div className='item-info'>
            <img className='view-item-img' src='https://c4.wallpaperflare.com/wallpaper/50/727/773/volkswagen-golf-mk7-vw-golf-7-gti-wallpaper-preview.jpg'/>
            <div className="view-item-info">
                <h4 className='my-4'>Item Name</h4>
                <span className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam, dolorem accusamus facere consequuntur quos dolore ab quisquam magnam repudiandae saepe voluptatibus sint officiis nulla, quod doloremque provident nobis voluptates!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia illo est optio magni reprehenderit quod vel blanditiis, quis eaque repellendus temporibus voluptatibus quisquam libero consequatur ipsum sed tempore pariatur.
                </span>
                
                <span className='view-item-price my-3'>
                    Price : <span className='text-danger'>20$</span>
                </span>
                <Link to=""><button className='btn btn-dark my-1'>Compare</button></Link>
            </div>
            </div>
        </div>
    )
}

export default ItemView