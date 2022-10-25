import './App.css';
// import Counter from './components/Counter';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

let init = false;

function App() {

  const apiKey = "74522572";

  let [ movie, setMovie ] = useState(null)
  let [favorites, setFavorites] = useState([])

  let navigate = useNavigate()

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie])
    alert(`Added ${movie.Title} to favorites`)
    navigate("/favorites")
  }

  const removeFromFavorites = (movie) => {
    let filteredArr = favorites.filter((m) => m.imdbID !== movie.imdbID);
    setFavorites(filteredArr)
  }

  const addMoreToFavorite = (more, id) => {
    console.log(more, id)
    let newUpdatedFavorites = favorites.map(m => {
      if (m.imdbID === id) {
        return {...m, rating: more.rating, notes: more.notes}
      } else {
        return m
      }
    })

    setFavorites(newUpdatedFavorites)
  }

  const getMovie = async (movieName) => {
    //method chaining with .then to handle asynchronous requests
    // fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=74522572`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch(e => console.log(e))

    // try and catch to properly handle errors
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
      console.log('next line')
      const data = await response.json()
      console.log(data)
      setMovie(data)
    } catch(e) {
      console.log('error')
      console.log(e)
    }

  } 

  useEffect(() => {
    if (!init) {
      getMovie("Clueless");
      console.log("testing");
      init = true;
    }
  }, []);

  // useEffect(() => {
  //   let someMovies = ['The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'Coraline', 'Hocus Pocus', 'Heathers', 'Full Metal Jacket', 'The Lord of the Rings: The Fellowship of the Ring', 'The Hobbit'];
  //   let randomMovie = Math.floor(Math.random() * someMovies.length)
  //   getMovie(someMovies[randomMovie])
  //   console.log('testing')
  // }, [])

  useEffect(() => {
    console.log('movie data has changed', movie)
  }, [movie])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home
        addToFavorites={addToFavorites} 
        movie={movie} 
        getMovie={getMovie} 
        favorites={favorites}/>} 
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} 
        removeFromFavorites={removeFromFavorites}/>} />

        <Route 
          path="/favorites/:id" 
          element={
            <MovieDetails 
            addMoreToFavorite={addMoreToFavorite}
            favorites={favorites}
             />
          }
        />
      </Routes>
      {/* <Counter /> */}
    </div>
  );
}

export default App;


















// import './App.css';
// import Header from './components/Header';
// import Player from './components/Player';
// import Board from './components/Board';


// function App() {
//   return (
//     <div>
//       <Header />
//       <Player whichPlayer="X"/>
//       <Player whichPlayer="O"/>
//       <Board />
//     </div>
//   );
// }

// export default App;
