import styles from "./Deals.module.css";

function ProductDisplayCard({pData}) {
  return (
    <div className={styles.pCard}>
      <div className={styles.pCard__top}>
        <img
          src={pData?.pImg}
          alt={pData?.pName}
          className={styles.pCard__img}
        />
      </div>

      <div className={styles.pCard__bottom}>
        <div className={styles.pName__div}>
            <h1 className={styles.pName}>{pData?.pName}</h1>
            <a className={styles.pCategory} href="#">{pData.pCategory}</a>
            <span className={styles.price__span}>
                <p className={styles.sellPrice}>{`$${pData?.pSellPrice}`}</p>
                <del className={styles.discountPrice}>{`$${pData?.pDiscountPrice}`}</del>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplayCard;
