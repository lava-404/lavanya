import styles from "../styles/Design.module.css"


const Design = () => {
  return(
    <>
      <div className={styles.main}>
        <div className={styles.glass}>
          <div className={styles.subMain}>
            <div className={styles.figma}>i love experimenting and playing around with figma too!</div>
            <div className={styles.pics}>
              <img className={styles.pic} src="/assets/design.png"></img>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Design