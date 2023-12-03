import React from 'react'
import "../signIn.css"
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';

const SignIn = () => {
 const [title ,setTitle ] = useState('')
 const [pass ,setPass ] = useState('')

    return (   
        <div className="grad1 position-relative login" >
           
            <div className="position-absolute top-50 start-50 translate-middle box p-2">  
               <h1>LogIn</h1>
               <div className="input">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
               </svg>
               <input
               placeholder='Username' 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
               />
               </div>
               <div className="pass">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 14 16">
                 <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
               <input 
                placeholder='password' 

                type="password" 
                required 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
               />
               </div>
               <button className='btn btn-primary w-100'>log In</button>
               <hr className='border-3 text-light' />
               <button className='btn btn-outline-success w-100 '>Sign Up!</button>
            </div> 
             
         </div>
    
    )
}

export default SignIn