import styles from './stylessquare.module.css'

export const TransitionSquare = () => {
    return (
        <>
            <div className={styles.areaTransitionSquare}>
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