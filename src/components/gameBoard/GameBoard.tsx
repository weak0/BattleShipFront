import { getShot } from '../../api/getShot';
import BoardLabel from './BoardLabel';
import Cell from './Cell';
import styles from './gameBoard.module.css';
import { ShotResult } from './ShotResult';

const GameBoard = ({ OpponnentBoardId, isYourTurn, handleChangeTurn }: { 
  OpponnentBoardId: number, 
  isYourTurn: boolean, 
  handleChangeTurn: () => void 
}) => {

  const shotHandler = async (cellNumber: number): Promise<ShotResult> => {
    if (!isYourTurn) {
      alert('Not your turn');
      return ShotResult.Default;
    }
    try {
      const shotResult: ShotResult = await getShot(cellNumber, OpponnentBoardId);
      handleChangeTurn();
      return shotResult
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
    </div>
  );
};

export default GameBoard;
