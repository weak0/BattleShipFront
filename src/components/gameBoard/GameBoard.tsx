import Cell from './Cell';
import styles from './gameBoard.module.css';
import { ShotResult, translateShotResult } from './ShotResult';

const GameBoard = ({ OpponnentBoardId }: { OpponnentBoardId: number }) => {
  const shotHandler =  async (cellNumber: number) => {
    const response = await fetch(`https://localhost:7031/start/shot?GameBoardId=${OpponnentBoardId}&Cordinate=${cellNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    if (response.status === 200) {
      const data : ShotResult = await response.json()
      console.log(translateShotResult(data))
    }
  }

  const labels = {
    horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    vertical: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  const renderLabels = (labelType: 'horizontal' | 'vertical') =>
    labels[labelType].map((label) => (
      <div key={label} className={styles[`${labelType}Element`]}>
        {label}
      </div>
    ));

  const cells = Array.from({ length: 100 }, (_, index) => (
    <Cell key={index} cellNumber={index} shotHandler={shotHandler} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.labelHorizontaly}>{renderLabels('horizontal')}</div>
      <div className={styles.bardVertcialLabelContainer}>
        <div className={styles.labelVerticaly}>{renderLabels('vertical')}</div>
        <div className={styles.board}>{cells}</div>
        <div className={styles.labelVerticaly}>{renderLabels('vertical')}</div>
      </div>
      <div className={styles.labelHorizontaly}>{renderLabels('horizontal')}</div>
    </div>
  );
};

export default GameBoard;
