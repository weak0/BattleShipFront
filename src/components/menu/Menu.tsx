import styles from './menu.module.css'
import { IGameData } from './IGameData'
import { createGame } from '../../api/createGame';


const Menu = ({setterIsGameStarted}: { setterIsGameStarted: (gb1 : number, gb2 : number) => void; }) => {


    const handleStartGame = async () => {
        try {
            const data : IGameData = await createGame(); 
                setterIsGameStarted(data.playerOneOponentBoardId, data.playerTwoOponentBoardId);
        } catch (error) {
            alert('Something went wrong')
        }
    }
    return (
        <>
            <div className={styles.container}>
                <button onClick={handleStartGame}>Start Game</button>
                <button>Settings</button>
            </div>
        </>
    )
}

export default Menu