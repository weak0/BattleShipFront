import styles from './notification.module.css'

const GameOver = ({playerName} : {playerName : string}) => {
  return (
    <div className={styles.gameOverBackdrop}>
        <div className={styles.gameOverContainer}>
        <h2>Gameover</h2>
        <p>{playerName} Wins!</p>
        <button className={styles.gameOverButton} onClick={() => window.location.reload()}>Back to Menu</button>
        </div>
    </div>
  )
}

export default GameOver