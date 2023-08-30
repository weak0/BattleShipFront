import GameBoard from '../gameBoard/GameBoard'
import styles from './game.module.css'


const Game = ({ pOBId, pTBId }: { pOBId: number, pTBId: number }) => {

  return (
    <div className={styles.game}>
      <section className={styles.playerSection}>
        <h2>Player One</h2>
        <GameBoard OpponnentBoardId={pOBId} />
      </section>
      <section className={styles.playerSection}>
        <h2>Player Two</h2>
        <GameBoard OpponnentBoardId={pTBId} />
      </section>
    </div>

  )
}

export default Game