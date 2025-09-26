import styles from "../styles/Footer.module.css"

const Footer = () => {
  return(
    <div className={styles.superMain} id="contact">
      <div className={styles.mainmain}>
        <img className={styles.divider} src="../assets/divider3.png"></img>
        <div className={styles.subMain}>
          <div className={styles.catch}>think we’d vibe? don’t overthink it, just DM me already 👀</div>
          <div className={styles.contacts}>
            <a href="https://x.com/lava_404" target="_blank" rel="noreferrer">x</a>
            <a href="https://medium.com/@lavanyaropt" target="_blank" rel="noreferrer">medium</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lavanyaropt@gmail.com" target="_blank" rel="noreferrer">gmail</a>
            <a href="https://github.com/lava-404" target="_blank" rel="noreferrer">github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;