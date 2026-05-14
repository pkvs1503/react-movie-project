import './App.css'
import favourites from './pages/favourites';
import Home from './pages/home';

function App() {
 
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<favourites />} />
      </Routes>
    </main>
  );
}


export default App;
