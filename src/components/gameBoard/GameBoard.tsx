import { getShot } from '../../api/getShot';
import { useState } from 'react';
import BoardLabel from './BoardLabel';
import Cell from './Cell';
import styles from './gameBoard.module.css';
import { ShotResult } from './ShotResult';
import ShotNotification from '../notifications/ShotNotification';

const GameBoard = ({ OpponnentBoardId, isYourTurn, handleChangeTurn, handleGameOver }: { 
  OpponnentBoardId: number, 
  isYourTurn: boolean, 
  handleChangeTurn: () => void 
  handleGameOver: () => void
}) => {

  const [isNotificationVisible, setIsNotificationVisible ] = useState(false);
  const [shotResult, setShotResult] = useState<ShotResult>(ShotResult.Default);

  const handleShotType = () => {
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 1000);

  }


  const shotHandler = async (cellNumber: number): Promise<ShotResult> => {
    if (!isYourTurn) {
      alert('Not your turn');
      return ShotResult.Default;
    }
    try {
      const result: ShotResult = await getShot(cellNumber, OpponnentBoardId);
      handleChangeTurn();
      if (result === ShotResult.GameOver) {
        handleGameOver();
      }else {
        setShotResult(result);
        handleShotType();
      }
      return result
    }
    catch (error) {
      alert("Something went wrong");
      return ShotResult.Default;
    }
    
  }
  const cells = Array.from({ length: 100 }, (_, index) => (
    <Cell key={index} cellNumber={index} shotHandler={shotHandler} />
  ));

  return (
    <div className={styles.container}>
      <BoardLabel orientation="horizontal" />
      <div className={styles.boardVertcialLabelContainer}>
        <BoardLabel orientation="vertical" />
        <div className={styles.board}>{cells}</div>
        <BoardLabel orientation="vertical" />
      </div>
      <BoardLabel orientation="horizontal" />
      { isNotificationVisible && <ShotNotification handleBackdropClick={() => setIsNotificationVisible(false)} isSunkActive={isNotificationVisible} shotType={shotResult} />}
    </div>
  );
};

export default GameBoard;
