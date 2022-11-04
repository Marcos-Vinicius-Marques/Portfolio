import styles from './stylesrectangle.module.css'

export const TransitionRectangle = () => {
    return (
        <>
            <div className={styles.areaTransitionRectangle}>
            <div className={styles.areaLeft}>
              <div className={styles.minSquareRight}></div>
            </div>
            <div className={styles.areaRight}>
              <div className={styles.minSquareLeft}></div>
            </div>
          </div>
        </>
    )
}