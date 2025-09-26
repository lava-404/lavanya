import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.main} id="about">
      <div className={styles.title}>about me</div>
      <div className={styles.points}>
        <div className={styles.pointer}>👩‍💻 im Lavanya, a full-stack developer currently in my second year of engineering</div>
        <div className={styles.pointer}>🧠 my brain is a warehouse of weird and creative ideas, and I love to experiment and play around with stuff</div>
        <div className={styles.pointer}>🚀 my main aim as a developer is creating solutions that make people's lives easier</div>
        <div className={styles.pointer}>💌 i am a social butterfly and love connecting with new people and making great friends</div>
      </div>
   
    </div>
  );
};

export default About;


