import './App.css';
import AddFilm from './compo/AddFilm';
import ListFilm from './compo/ListFilm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Moviecard from './compo/comp2/Moviecard';
import Movdesc from './compo/comp2/Movdesc';
import mo from './compo/mm.jpeg'
function App() {
  const [movies, setMovies] = useState([ {
    
      id: "1",
      title: "the devil wears",
      rate: 4,
      date: "2006",
      imgUrl:
      "https://lumiere-a.akamaihd.net/v1/images/pp_thedevilwearsprada_21373_dabe3cc6.jpeg?region=0%2C0%2C540%2C810",
      description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.', 
      category: "comedu | drame",
      trailer: "https://youtu.be/6ZOZwUQKu3E?si=fhM_4yB5UjZf0QkuZwE8Zg",
      __v: 0,
    },
    {
      id: "2",
      title: "Once Upon A Time In The west",
      rate: 5,
      date: "1968",
      imgUrl:
        "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
      category: "Western",
      trailer:"https://youtu.be/c8CJ6L0I6W8?si=Zquqk5mrDEm55VZb",
      __v: 0,
    },
    {
      id: "3",
      title: "Taxi Driver",
      rate: "8.2/10 IMDb",
      date: "1976",
      imgUrl:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
      category: "Crime | Drama",
      trailer:"https://youtu.be/UUxD4-dEzn0?si=5-FXR04r00GtiqTL",
      __v: 0,
    },
    {
      id: "4",
      title: "charlie and the choclate factory",
      rate: "6.7/10 IMDb",
      date: "2005",
      imgUrl:'https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_FMjpg_UX1000_.jpg',
      description: 'A young boy and his little sister struggle to survive a mysterious, charred factory in the country.',
      category: "Animation | Comedy",
      
      __v: 0,
    },
    {
      id: "5",
      title: "Little Miss Sunshine",
      rate: 3,
      date: "2006",
      imgUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      category: "Comedy | Drama",
      trailer:"https://youtu.be/OFVGCUIXJls?si=j27jxlq_JDWaDe9r",
    
      __v: 0,
    },
    {
      id: "5",
      title: "the godfather",
      rate: "9.2/10 IMDb",
      date: "1972",
      imgUrl:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',

        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 

      category: "Action | politic",
      trailer:"https://youtu.be/UaVTIH8mujA?si=y-fY1nWaf1ix53bC",

      __v: 0,
    },
    {
      id: "6",
      title: "The Wolf Of Wall Street",
      rate: 5,
      date: "2013",
      imgUrl:
        "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      category: "Biography | Crime | Drama",
      trailer:"https://youtu.be/iszwuX1AK6A?si=RS15tzSRn5dwftCy",
      __v: 0,
  
  
  },
 
 ])
  //{movies.map((movie)=>(<div className="film"><Film  title={movie.title} id={movie._id}


 const add=(movie)=>setMovies([...movies,movie])

  return (
   
    <>
    
    <div className="App">
    
   
    <AddFilm add={add} />
     <ListFilm movies={movies} />
     
     
     

    </div>
    <Router>
      <Routes>
        <Route path="/" element={<div>{movies.map((movie)=><Moviecard key={movie.id} movie={movie}/>)}</div>} />
      <Route path="/movie/:id" element={<Movdesc />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
