import styles from './menu.module.css'
import { IGameData } from './IGameData'


const Menu = ({setterIsGameStarted}: { setterIsGameStarted: (gb1 : number, gb2 : number) => void; }) => {


    const handleStartGame = async () => {
        try {
            const response = await fetch('https://localhost:7031/start', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                const data: IGameData  = await response.json()
                setterIsGameStarted(data.playerOneOponentBoardId, data.playerTwoOponentBoardId);
            } else {
            alert('Error')
            }
        } catch (error) {
            alert('Error')
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