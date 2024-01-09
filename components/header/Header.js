import Image from "next/image";
import styles from "./Header.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo__wrapper}>
        <Image
          src={"/assets/img/logo.png"}
          width={100}
          height={50}
          className={styles.logo}
          priority
          alt="logo"
        />
      </div>

      <div className={styles.searchBar_wrapper}>
        <input placeholder="Search" className={styles.search} />
        <span className={styles.searchIcon}>
          <SearchOutlinedIcon />
        </span>
      </div>

      <div className={styles.menu}>
        {/* user */}
        <button className={styles.actionBtn}>
          <Person2OutlinedIcon />
        </button>

        {/* favourite */}
        <button className={styles.actionBtn}>
          <FavoriteBorderOutlinedIcon />
          <span className={styles.count}>0</span>
        </button>
        {/* cart */}
        <button className={styles.actionBtn}>
          <ShoppingBagOutlinedIcon />
          <span className={styles.count}>9+</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
