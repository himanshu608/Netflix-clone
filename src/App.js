import './App.css';
import Row from './Row';
import requests from './request'
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title="Trending"  fetchUrl={requests.fetchTrending} />
      <Row title="Top rated"  fetchUrl={requests.fetchTopRated} />
      <Row title="Action"  fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy"  fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror"  fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance"  fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary"  fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
