import styles from "./Banner.module.css";

function Banner({ bData }) {
  return (
    <div className={styles.banner__wrapper} id="bannerWrapper">
      <div className={styles.banner__div}>
        <img src={bData?.banner} className={styles.banner} />
        <div className={styles.banner__content}>
          <p className={styles.subtitle}>{bData?.subtitle}</p>
          <h2 className={styles.title}>{bData?.title}</h2>
          <p className={styles.text}>
            starting at $ <b>{bData?.startingAt[0]}</b>
            {bData?.startingAt[1]}
          </p>
          <a href="#" className={styles.btn}>
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
