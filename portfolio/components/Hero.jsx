import styles from "../styles/Hero.module.css"
const Hero = () => {
  return(
    <div className={styles.main1}>
      <div className={styles.main}>
        <img className={styles.meimg} src="../public/assets/snoopy1.png"></img>
        <div className={styles.subMain}>
          <text className={styles.tagline}>shaping logic into experiences</text>
          <text className={styles.me}>hey! i'm lavanya, a full stack developer and a full time diet coke addict. I love building innovative and cool stuff that solve real world problems</text>
        </div>
      </div>
    </div>
  )
}

export default Hero