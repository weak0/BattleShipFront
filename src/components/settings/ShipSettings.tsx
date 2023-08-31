import { configureGame } from '../../api/changeSettings'
import styles from './settings.module.css'
import { useState } from 'react'

const ShipSettings = () => {

    const [ships5, setShips5] = useState(1)
    const [ships4, setShips4] = useState(1)
    const [ships3, setShips3] = useState(1)
    const [ships2, setShips2] = useState(2)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            configureGame(ships5, ships4, ships3, ships2);
            alert('Settings changed')
        } catch (error) {
            alert('Something went wrong')
        }
    }

    return (
        <>
            <p>Number of ships:</p>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.shipsSettings}>
                <div className={styles.formGroup}>
                    <label className={styles.labelSettings} htmlFor='numberOf5Ships'>Number of Carrier(5) :</label>
                    <input className={styles.numberOfShipsInput} type="number" name="numberOf5Ships" id="numberOf5Ships" placeholder='1' onChange={(e) => setShips5(Number(e.target.value))} min={0} max={6} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.labelSettings} htmlFor='numberOf4Ships'>Number of Battleship (4) :</label>
                    <input className={styles.numberOfShipsInput} type="number" name="numberOf4Ships" id="numberOf4Ships" placeholder='1' onChange={(e) => setShips4(Number(e.target.value))} min={0} max={8} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.labelSettings} htmlFor='numberOf3Ships'>Number of Crusier (3) :</label>
                    <input className={styles.numberOfShipsInput} type="number" name="numberOf3Ships" id="numberOf3Ships" placeholder='1' onChange={(e) => setShips3(Number(e.target.value))} min={0} max={11} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.labelSettings} htmlFor='numberOf2Ships'>Number of Destroyer (2) :</label>
                    <input className={styles.numberOfShipsInput} type="number" name="numberOf2Ships" id="numberOf2Ships" placeholder='2' onChange={(e) => setShips2(Number(e.target.value))} min={0} max={16} />
                </div>
                <button className={styles.buttonSave} type='submit'>Save</button>
            </form>
        </>
    )
}

export default ShipSettings