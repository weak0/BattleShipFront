import GameBoard from '../gameBoard/GameBoard'
import styles from './game.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { RotateProp } from '@fortawesome/fontawesome-svg-core'
import GameOver from '../notifications/GameOver'
import { ISettingsContext } from '../../context/ISettingsContext'
import { useSettingsContext } from '../../context/settingsContext'


const Game = ({ pOBId, pTBId }: { pOBId: number, pTBId: number }) => {

const [isPlayerOneTurn, setIsPlayerOneTurn] = useState<boolean>(true)
const [isGameOver, setIsGameOver] = useState<boolean>(false)

const ctx : ISettingsContext = useSettingsContext();

const rotationValue = isPlayerOneTurn ? 180 : 0


  return (
    <div className={styles.game}>
      <section className={styles.playerSection}>
        <h2>{ctx.playerOneName}</h2>
        <GameBoard OpponnentBoardId={pOBId} isYourTurn = {isPlayerOneTurn} handleChangeTurn={() => setIsPlayerOneTurn(!isPlayerOneTurn)} handleGameOver={() => setIsGameOver(true) }  />
      </section>
      <div className={styles.turnPointer}>
      <FontAwesomeIcon icon={faArrowRight} rotation={rotationValue as RotateProp} size="2xl"  />  
        <p>Turn</p>
      <FontAwesomeIcon icon={faArrowRight} rotation={rotationValue as RotateProp} size="2xl" />
      </div>
      <section className={styles.playerSection}>
        <h2>{ctx.playerTwoName}</h2>
        <GameBoard OpponnentBoardId={pTBId} isYourTurn = {!isPlayerOneTurn} handleChangeTurn={() => setIsPlayerOneTurn(!isPlayerOneTurn)} handleGameOver={() => setIsGameOver(true) }  />
      </section>
     {isGameOver && <GameOver playerName={!isPlayerOneTurn ? ctx.playerOneName : ctx.playerTwoName}/>}
    </div>

  )
}

export default Game