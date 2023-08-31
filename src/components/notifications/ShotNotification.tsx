import styles from './notification.module.css'
import { useEffect } from 'react';
import sunk from '../../assets/sunk.mp3'
import { ShotResult, translateShotResult } from '../gameBoard/ShotResult';


const ShotNotification = ({handleBackdropClick, isSunkActive , shotType }: {
    handleBackdropClick : () => void, 
    isSunkActive : boolean,
    shotType: ShotResult
  }) => {

    useEffect(() => {
        if (isSunkActive && shotType === ShotResult.Sunk ) {
            const audio = new Audio(sunk);
            audio.volume = 0.5;
            audio.play();
        }
    }, [isSunkActive, shotType])

  return (
    <div className={styles.shotNtfBackdrop} onClick={handleBackdropClick}>
        <div className={styles.shotContainer}>
        <h2>{translateShotResult(shotType)}</h2>
        </div>
    </div>
  )
}

export default ShotNotification