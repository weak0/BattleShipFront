import './App.css';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import Game from './components/game/Game';
import { SettingsProvider } from './context/settingsContext';

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
        <a href='' onClick={() => window.location.reload()}>BattleShip Game</a>
        <div>
        <label>Github :</label>
        <a href = "https://github.com/weak0/BattleShipFront"> Frontend</a>
        <a href = "https://github.com/weak0/BattleShip"> Backend</a>
        </div>
      </header>
      <main>
        <SettingsProvider>
        {isGameStarted ? (
          //POPRAWKA NAZW
          <Game pOBId={playerOneOpponnentBoardId} pTBId={playerTwoOpponnentBoardId} />
        ) : (
          <Menu setterIsGameStarted={handleIsGameStarted} />
        )}        
        </SettingsProvider>
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
