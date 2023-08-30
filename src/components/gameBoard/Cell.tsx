import { ShotResult } from './ShotResult'
import styles from './gameBoard.module.css'
import { useState, useEffect, useRef } from 'react'
const Cell = ({ cellNumber, shotHandler }: { cellNumber: number, shotHandler: (cellNumber: number) => Promise<ShotResult> }) => {

    const [cellStatus, setCellStatus] = useState<ShotResult>(ShotResult.Default)
    const [isClicked, setIsClicked] = useState<boolean>(false) 

    const handleClick = async () => {
        if (isClicked) {
            return;
        }
        const result: ShotResult = await shotHandler(cellNumber)
        setCellStatus(result)
       if (result !== ShotResult.Default) setIsClicked(true)
    }

    const cellRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (cellRef.current !== null) {
            switch (cellStatus) {
                case ShotResult.Miss:
                    cellRef.current.style.background = 'red';
                    break;
                case ShotResult.Hit:
                    cellRef.current.style.background = 'green';
                    break;
                case ShotResult.Sunk:
                    cellRef.current.style.background = 'green';
                    break;
                default:
                    break;
            }
        }
    }, [cellStatus])

    return <div className={styles.cell} onClick={handleClick}>
        <div className={styles.cellStatus} ref={cellRef}>
        </div>
    </div>;
}

export default Cell