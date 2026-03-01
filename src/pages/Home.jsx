import { useEffect, useState } from "react";
import Moviecards from "../componenets/Moviecards";
import "../assets/Home.css";
import "../assets/Search.css";
import { searchmovies,getpopularmovies } from "../sevices/api";

function Home() {
    const[movies,setmovies]=useState([]);
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true);

    const [searchQuery, setsearchQuery] = useState("");

    useEffect(()=>{
        const loadpopularmovies=async()=>{
            try{
                const popularmovies=await getpopularmovies()
                setmovies(popularmovies)
            }
            catch(err){
                seterror("faild to load the moves----");
                console.log(err);
            }
            finally{
                setloading(false)
            }
        }
        loadpopularmovies()
    },[])


    const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setloading(true)
    try {
        const results = await searchmovies(searchQuery);
        setmovies(results);
    } catch (err) {
        seterror("Search failed");
        console.log(err);
    }
    finally {
        setloading(false);
        setsearchQuery("");
    }
    };

    return (
        <div className="Home">
            <form onSubmit={handlesearch} className="search-form">
                <input type="text" placeholder="search movies" className="search-input" 
                value={searchQuery} onChange={(e) => setsearchQuery(e.target.value)} />
                <button type="Submit" className="search-button" >
                    Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>movie.Title.toLowerCase().startsWith(searchQuery)&&
                 (<Moviecards movie={movie} key={movie.imdbID} />))}
            </div>

        </div>
    );
}


export default Home