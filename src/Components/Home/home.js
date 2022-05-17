import { useState,useEffect} from "react";
import NavBar from "../Navbar/navBar"
import MovieList from "../MovieList/MovieList"
  //  let url = "https://movies-library15.herokuapp.com/trending";


export default function Home (){

    const [movies, setMovie] = useState([]);

    async function getMovies() {

        let url = process.env.REACT_APP_SERVER;
    
        console.log("1,url", url);


        let response = await fetch(`${url}/recipes`);
        // console.log("2,response", response);
    
        let moviesData = await response.json();
         console.log("3,moviesData", moviesData);
        setMovie(moviesData);
        // console.log("states",recipes);
      }
    
      useEffect(() => {
        getMovies();
      }, []);
    

    return(
        <>
        <NavBar/>
        {
            (movies.length>0)&&<MovieList movies={MovieList} />
        }
        


        </>
    )
}