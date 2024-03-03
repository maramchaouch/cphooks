import Film from "./Film"
import {useState} from 'react'
import './ListFilm.css'
const  ListFilm = ({movies} ) =>{
 
  const [films, setFilms] = useState(movies)
    

  return(    <>




   {films.map((movie)=>(<div className="film"><Film  title={movie.title} id={movie._id}
     rate={movie.rate} date={movie.date} disc={movie.description} src={movie.imgUrl} /> 
     </div>))}
        </>
       
       
      )
}
 


    
export default ListFilm;
