function moviecard({movie}) {
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster} alt={movie.title}/>
            </div>
           </div>
    );
}