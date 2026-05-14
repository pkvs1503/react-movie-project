import './App.css'
import moviecard from './components/moviecard';

function App() {
  const movieNumber=1;
  return (
    <>
    <Text display="Hello Movie"/>
    <Text display="Welcome to the Movie App"/>
    {movieNumber == 1 ? (
    <moviecard movie={{title: "Inception", description: "A mind-bending thriller about dreams within dreams.", poster: "https://m.media-amazon.com/images/I/51s+qj8n9lL._AC_.jpg"}}/>)
    :(
    <moviecard movie={{title: "The Matrix", description: "A hacker discovers the true nature of reality and his role in the war against its controllers.", poster: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"}}/>
    )}
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
