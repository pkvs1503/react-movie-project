import '.css/App.css';
import Navbar from './pages/NavBar';
import { Routes, Route } from 'react-router-dom';
import favourites from './pages/favourites';
import Home from './pages/home';

function App() {
 
  return (
    <div>
    <Navbar/>
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<favourites />} />
      </Routes>
    </main>
    </div>
  );
}


export default App;
