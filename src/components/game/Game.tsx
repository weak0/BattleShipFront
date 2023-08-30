import GameBoard from '../gameBoard/GameBoard'
import styles from './game.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { RotateProp } from '@fortawesome/fontawesome-svg-core'


const Game = ({ pOBId, pTBId }: { pOBId: number, pTBId: number }) => {

const [isPlayerOneTurn, setIsPlayerOneTurn] = useState<boolean>(true)

const handleChangeTurn = () => {
  setIsPlayerOneTurn(!isPlayerOneTurn)
}

const rotationValue = isPlayerOneTurn ? 180 : 0


  return (
    <div className={styles.game}>
      <section className={styles.playerSection}>
        <h2>Player One</h2>
        <GameBoard OpponnentBoardId={pOBId} isYourTurn = {isPlayerOneTurn} handleChangeTurn={handleChangeTurn} />
      </section>
      <div className={styles.turnPointer}>
      <FontAwesomeIcon icon={faArrowRight} rotation={rotationValue as RotateProp} size="2xl"  />  
        <p>Turn</p>
      <FontAwesomeIcon icon={faArrowRight} rotation={rotationValue as RotateProp} size="2xl" />
      </div>
      <section className={styles.playerSection}>
        <h2>Player Two</h2>
        <GameBoard OpponnentBoardId={pTBId} isYourTurn = {!isPlayerOneTurn} handleChangeTurn={handleChangeTurn} />
      </section>
    </div>

  )
}

export default Game