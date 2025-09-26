import styles from "../styles/Header.module.css"
const Header = () => {

return(
  <>
    <div className={styles.main}>
      <a>Lavanya</a>
      <div className={styles.submain}>
        <a href="#work">work</a>
        <a href="#about">about me</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  </>
)
}

export default Header