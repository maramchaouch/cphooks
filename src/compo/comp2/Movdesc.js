import React from 'react'
import { Link , useParams } from 'react-router-dom'
const Movdesc=({movie})=>{
    const {id}=useParams();
  const movie=movies.find((m)=> m.id===parseInt(id,10));
  if(!movie){
    return(
        <div>movie did not found</div>
    )
  }
  return(
    <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
        <Link to="/movies">Back</Link>
        </div>
  )

}

export default Movdesc
