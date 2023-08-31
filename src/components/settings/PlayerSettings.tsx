import { ISettingsContext } from '../../context/ISettingsContext'
import { useSettingsContext } from '../../context/settingsContext'
import styles from './settings.module.css'
import {useState} from 'react' 

const PlayerSettings = () => {

    const [playerOneName, setPlayerOneName] = useState('')
    const [playerTwoName, setPlayerTwoName] = useState('')

    const ctx : ISettingsContext  = useSettingsContext();

    const handleNameChange = () => {
       ctx.playerOneNameSetter(playerOneName);
       ctx.playerTwoNameSetter(playerTwoName);
       alert('Names changed')
    }

  return (
    <>
    <p>Player settings: </p>
      <div className={styles.formGroup}>
        <label htmlFor="playerOneName:">Player One Name :</label>
        <input className={styles.playerNameInput} type="text" name="playerOneName" id="playerOneName" placeholder='Player One'  value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value)}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="playerTwoName:">Player Two Name :</label>
        <input className={styles.playerNameInput} type="text" name="playerTwoName" id="playerTwoName" placeholder='Player Two' value={playerTwoName} onChange={(e) => setPlayerTwoName(e.target.value)}/></div>
        <button className={styles.buttonSave} onClick={handleNameChange}>Save</button>
    </>
  )
}

export default PlayerSettings