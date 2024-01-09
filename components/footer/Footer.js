import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Inspired from <a className={styles.credit} href='https://codewithsadee.github.io/anon-ecommerce-website'>@Anon</a></p>
    </div>
  )
}

export default Footer
