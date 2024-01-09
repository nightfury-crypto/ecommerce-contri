import styles from "./Deals.module.css"
import ProductDisplayCard from "./ProductDisplayCard"
function Deals({title, dealsData}) {

  return (
    <div className={styles.deals}>
      <div className={styles.deals__top}>
        <h1 className={styles.heading}>{title}</h1>
      </div>

      <div className={styles.deals__bottom}>
        {dealsData?.map((deal, index) => <ProductDisplayCard pData={deal} key={index}/>)}
      </div>
    </div>
  )
}

export default Deals
