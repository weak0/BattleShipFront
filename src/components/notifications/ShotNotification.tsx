import styles from './notification.module.css'
import { useEffect } from 'react';
import sunk from '../../assets/sunk.mp3'
import { IShot, translateShotResult, ShotResult } from '../gameBoard/ShotResult';


const ShotNotification = ({handleBackdropClick, isSunkActive , shotDto }: {
    handleBackdropClick : () => void, 
    isSunkActive : boolean,
    shotDto: IShot
  }) => {

    useEffect(() => {
        if (isSunkActive && shotDto.shotResult === ShotResult.Sunk ) {
            const audio = new Audio(sunk);
            audio.volume = 0.5;
            audio.play();
        }
    }, [isSunkActive, shotDto])

  return (
    <div className={styles.shotNtfBackdrop} onClick={handleBackdropClick}>
        <div className={styles.shotContainer}>
        <h2>{translateShotResult(shotDto.shotResult)} {shotDto.shipLength > 0 ? " Ship Length: " + shotDto.shipLength : null}!</h2>
        </div>
    </div>
  )
}

export default ShotNotification