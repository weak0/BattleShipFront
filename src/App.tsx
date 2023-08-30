import './App.css';
import { useState } from 'react';
import Menu from './components/menu/menu';
import Game from './components/game/game';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerOneOpponnentBoardId, setPlayerOneOpponnentBoardId] = useState<number>(0);
  const [playerTwoOpponnentBoardId, setPlayerTwoOpponnentBoardId] = useState<number>(0);

  const handleIsGameStarted = (pOneOpponnentsBoardId: number, pTwoOpponnentsBoardId: number) => {
    setPlayerOneOpponnentBoardId(pOneOpponnentsBoardId);
    setPlayerTwoOpponnentBoardId(pTwoOpponnentsBoardId);
    setIsGameStarted(true);
  };

  return (
    <div className="App">
      <header>
        <a href='#'>BattleShip Game</a>
        <div>
        <label>Github :</label>
        <a href = "#"> Frontend</a>
        <a href = "#"> Backend</a>
        </div>
      </header>
      <main>
        {isGameStarted ? (
          <Game pOBId={playerOneOpponnentBoardId} pTBId={playerTwoOpponnentBoardId} />
        ) : (
          <Menu setterIsGameStarted={handleIsGameStarted} />
        )}
      </main>
      <footer>
        <div>
        <label>Created by : </label><a>maciej.gorzela89@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
