import {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Game from './components/Game';

function App() {

  const [gameList, setGameList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
    .then(res => setGameList(res.data));

  }, [search]);

  /*
  const getGames = () => {
    Axios.get(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
    .then(res => setGameList(res.data));
  }

  console.log(gameList)
*/
  return (
    <div className="App">
     <h1>Játék keresése realtime a Steam-en!</h1>
     <input type="text" value={search} placeholder="írd be a játék nevét..." 
     onChange={(e)=> setSearch(e.target.value)}/>
     {/*}<button onClick={getGames}>Keresés</button>{*/}

     <div className="game-container">

        {
          gameList.map(game => {
            return <Game key={game.gameID} thumb={game.thumb} gameID={game.gameID} steamAppID={game.steamAppID} cheapest={game.cheapest} cheapestDealID={game.cheapestDealID} external={game.external}
            internalName={game.internalName}/>
          })
        }

     </div>
    </div>
  );
}

export default App;