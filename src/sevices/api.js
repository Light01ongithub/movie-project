const API_KEY="af7cd21a"
const BASE_URL="https://www.omdbapi.com/"

export const getpopularmovies=async() =>{
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie`);
    const data=await response.json()
    console.log("Popular movies response:", data);
    console.log("Total results:", data.totalResults);
    return data.Search ||[]
};
export const searchmovies=async(query) =>{
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data=await response.json()
    console.log("Search results for:", query, data);
    console.log("Total results found:", data.totalResults);
    return data.Search ||[]
};