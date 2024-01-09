import styles from "./TopBar.module.css"

function TopBar() {
  return (
    <div className={styles.topBar__wrapper}>
      <h1 className={styles.text}>FREE SHIPPING THIS WEEK ORDER OVER - $55</h1>
    </div>
  )
}

export default TopBar
