import React from 'react'
import { Link } from 'react-router-dom'
const Moviecard = (movie) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className='moviecard' >
            <img src={src} alt='' />
<h2 style={{color:'blue',fontWeight:'bold',fontSize:'50px'}}>{title}</h2>
<h3 style={{color:'green',fontWeight:'bold',fontSize:'20px'}}>Rate:{rate} </h3>
<h3 style={{color:'red',fontWeight:'bold',fontSize:'20px'}}>Date:{date} </h3>
<p style={{color:'black',fontWeight:'bold',fontSize:'20px'}}>Description: {disc}</p>


            </div>
            
            
            
            </Link>
    )
    
}

export default Moviecard
