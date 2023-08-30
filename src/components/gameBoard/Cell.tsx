import styles from './gameBoard.module.css'

const Cell = ({ cellNumber, shotHandler }: { cellNumber: number, shotHandler: (cellNumber: number) => void }) => {
    const handleClick = () => {
        shotHandler(cellNumber)
    }

    return <div className={styles.cell} onClick={handleClick}>
        <div className={styles.cellStatus}>
        </div>
    </div>;
}

export default Cell