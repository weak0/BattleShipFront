import { IShot, ShotResult, deafultShot } from './ShotResult'
import styles from './gameBoard.module.css'
import { useState, useEffect, useRef } from 'react'
const Cell = ({ cellNumber, shotHandler }: { cellNumber: number, shotHandler: (cellNumber: number) => Promise<IShot> }) => {

    const [cellStatus, setCellStatus] = useState<IShot>(deafultShot)
    const [isClicked, setIsClicked] = useState<boolean>(false) 

    const handleClick = async () => {
        if (isClicked) {
            return;
        }
        const result : IShot = await shotHandler(cellNumber)
        setCellStatus(result)
       if (result.shotResult !== ShotResult.Default) setIsClicked(true)
    }

    const cellRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (cellRef.current !== null) {
            switch (cellStatus.shotResult) {
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