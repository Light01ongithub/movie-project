import { useMoviecontext } from "../context/moviecontext";
import Moviecards from "../componenets/Moviecards";
import "../assets/Favourite.css";


function Favourites (){
    const{favourites}=useMoviecontext();

    if(favourites && favourites.length >0){
        return(
            <div className="favourites">
                <h2>Your Fav</h2>
                <div className="movies-grid">
                    {favourites.map((movie)=>(<Moviecards movie={movie} key={movie.imdbID}/>))}
                </div>
            </div>
        )
    }



return(
    <div className="Favourites">
        <h1>this is my favourite page</h1>
        <p>hello wellcome here</p>
    </div>
)

}

export default Favourites