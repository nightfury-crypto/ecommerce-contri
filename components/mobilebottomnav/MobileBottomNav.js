import styles from "./MobileBottomNav.module.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';

function MobileBottomNav() {
  return (
    <nav className={styles.mobileNav__wrapper}>
      <ul className={styles.bottom__Nav}>
        <button className={styles.actionBtn}>
          <HorizontalSplitOutlinedIcon />
        </button>
        <button className={styles.actionBtn}>
          <HomeOutlinedIcon />
        </button>

        <button className={styles.actionBtn}>
          <ShoppingBagOutlinedIcon />
          <span className={styles.count}>9+</span>
        </button>
        <button className={styles.actionBtn}>
          <FavoriteBorderOutlinedIcon />
          <span className={styles.count}>0</span>
        </button>

        <button className={styles.actionBtn} data-mobile-menu-open-btn>
          <CategoryOutlinedIcon />
        </button>
      </ul>
    </nav>
  );
}

export default MobileBottomNav;
