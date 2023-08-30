import styles from './gameBoard.module.css'

const BoardLabel = ({orientation} : {orientation : 'horizontal' | 'vertical'}) => {
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

  return (
    <div className={styles[`${orientation}Label`]}>
    {renderLabels(orientation)}
    </div>
  )
}

export default BoardLabel