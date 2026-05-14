function moviecard({movie}) {

    function onfavouriteClick(){
        alert(`You have added ${movie.title} to your favourites!`);
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title}/>
                <div className="movie-overlay">
                  <button className="favourite-btn" onClick={onfavouriteClick}> 
                    Favourite
                    </button>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                </div>
            </div>
           </div>
    );
}

