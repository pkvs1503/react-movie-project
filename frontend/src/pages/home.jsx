import moviecard from '../components/moviecard';

function Home() {
    const movies=[
        {title: "Inception", description: "A mind-bending thriller about dreams within dreams.", poster: "https://m.media-amazon.com/images/I/51s+qj8n9lL._AC_.jpg"},
        {title: "The Matrix", description: "A hacker discovers the true nature of reality and his role in the war against its controllers.", poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"},
        {title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", poster: "https://m.media-amazon.com/images/I/71n58rQyZlL._AC_SY679_.jpg"}
    ];  

    return(
        <div className="home-page">
            <h1>Welcome to the Movie App</h1>
            <div className="movie-cards">
                {movies.map((movie, index) => (
                    <moviecard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;