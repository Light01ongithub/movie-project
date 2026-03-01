


import { Movieprovider } from './context/moviecontext'
import Home from './pages/Home';
import Moviecards from './componenets/Moviecards';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourite';
import Navbar from './componenets/Navbar'


function App() {

  return (
    <Movieprovider>

    <Navbar/>
    <main className="main-content">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Fav' element={<Favourites />} />
      </Routes>
    </main>
    
    </Movieprovider>
    
    
  )
}

export default App
