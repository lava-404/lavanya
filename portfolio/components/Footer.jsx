import styles from "../styles/Footer.module.css"

const Footer = () => {
  return(
    <div className={styles.superMain} id="contact">
      <div className={styles.mainmain}>
        <img className={styles.divider} src="../assets/divider3.png"></img>
        <div className={styles.subMain}>
          <div className={styles.catch}>think we’d vibe? don’t overthink it, just DM me already 👀</div>
          <div className={styles.contacts}>
            <a href="https://x.com/" target="_blank" rel="noreferrer">x</a>
            <a href="https://medium.com/" target="_blank" rel="noreferrer">medium</a>
            <a href="mailto:someone@example.com" target="_blank" rel="noreferrer">gmail</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;