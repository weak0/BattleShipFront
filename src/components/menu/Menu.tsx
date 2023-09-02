import styles from './menu.module.css'
import { IGameData } from './IGameData'
import { createGame } from '../../api/createGame';
import {useState} from 'react'
import Settings from '../settings/Settings';
import { useSettingsContext } from '../../context/settingsContext';
import Loading from '../loading/Loading';


const Menu = ({ setterIsGameStarted }: { setterIsGameStarted: (gb1: number, gb2: number) => void; }) => {
    const [isSettingsActive, setIsSettingsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const context = useSettingsContext();

     const handleStartGame = async () => {
        try {
            setIsLoading(true);
            const data: IGameData = await createGame(context.playerOneName, context.playerTwoName);
            setterIsGameStarted(data.playerOneOponentBoardId, data.playerTwoOponentBoardId);
            setIsLoading(false);
        } catch (error) {
            alert('Something went wrong')
        }
    }
    return (
       <>{ isSettingsActive ?
            <Settings handleClose={() => setIsSettingsActive(false)}/> : isLoading ? <Loading/> :
            <div className={styles.container}>
                <button className={styles.menuButton} onClick={handleStartGame}>Start Game</button>
                <button className={styles.menuButton} onClick={() =>setIsSettingsActive(true)}>Settings</button>
            </div>
        }
       </>   
        
        
    )
}

export default Menu