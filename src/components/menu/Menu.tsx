import styles from './menu.module.css'
import { IGameData } from './IGameData'
import { createGame } from '../../api/createGame';
import {useState} from 'react'
import Settings from '../settings/Settings';


const Menu = ({ setterIsGameStarted }: { setterIsGameStarted: (gb1: number, gb2: number) => void; }) => {
    const [isSettingsActive, setIsSettingsActive] = useState(false);


     const handleStartGame = async () => {
        try {
            const data: IGameData = await createGame();
            setterIsGameStarted(data.playerOneOponentBoardId, data.playerTwoOponentBoardId);
        } catch (error) {
            alert('Something went wrong')
        }
    }
    return (
       <>{ isSettingsActive ?
            <Settings handleClose={() => setIsSettingsActive(false)}/> :
            <div className={styles.container}>
                <button className={styles.menuButton} onClick={handleStartGame}>Start Game</button>
                <button className={styles.menuButton} onClick={() =>setIsSettingsActive(true)}>Settings</button>
            </div>
        }
       </>   
        
        
    )
}

export default Menu