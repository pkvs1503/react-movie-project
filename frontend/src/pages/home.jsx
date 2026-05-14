import moviecard from '../components/moviecard';
import {useState} from 'react';
import '.css/home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies=[
        {title: "Inception", description: "A mind-bending thriller about dreams within dreams.", poster: "https://m.media-amazon.com/images/I/51s+qj8n9lL._AC_.jpg"},
        {title: "The Matrix", description: "A hacker discovers the true nature of reality and his role in the war against its controllers.", poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"},
        {title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", poster: "https://m.media-amazon.com/images/I/71n58rQyZlL._AC_SY679_.jpg"}
    ];  

    function handleSearch(e){
        e.preventDefault();
        alert(`You searched for: ${searchQuery}`);
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-cards">
                {movies.map((movie) =>
                 movie.title.toLowerCase().startsWith(searchQuery) &&  <moviecard key={index} movie={movie} />
                )}
            </div>
        </div>
    );
}

export default Home;