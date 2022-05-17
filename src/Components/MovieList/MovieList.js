import MovieCard from "../Movie/Movie"
export default  function MovieList(props) {
    return (
        <>
            {
            props.recipes.map((results)=>{
                return (
                  <>
                    <MovieCard results={results} />
                  </>
                );
            })
            }
        </>
        
    )
}