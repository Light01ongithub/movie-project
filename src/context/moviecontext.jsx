import { createContext,useState,useContext,useEffect, Children } from "react";

const Moviecontext=createContext()
export const useMoviecontext=()=>useContext(Moviecontext)
export const Movieprovider=({children})=>{
    const[favourites,setfavourites]=useState([])

useEffect(()=>{
    const storedFavs=localStorage.getItem('favourites')
    if(storedFavs)setfavourites(JSON.parse(storedFavs))
},[])

useEffect(()=>{
    // persist whenever favourites change
    localStorage.setItem('favourites', JSON.stringify(favourites));
},[favourites])

const addtofavourites=(movie)=>{
    setfavourites(prev=>[...prev,movie])
}
const removefromfavourites=(movieID)=>{
    setfavourites(prev=>prev.filter(movie=>movie.imdbID!==movieID))
}
const isfavourite=(movieID)=>{
    return favourites.some(movie=>movie.imdbID===movieID)
}

const value={
    favourites,
    addtofavourites,
    removefromfavourites,
    isfavourite
}

return<Moviecontext.Provider value={value}>
        {children}
     </Moviecontext.Provider>



}