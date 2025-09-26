import styles from "../styles/Work.module.css";

const Work = () => {
  const projects = [
    {
      p_name: "DryAf",
      path: "../assets/dryaffinal.mp4", // update with correct path
      info: "About: DryAF, Your sassy hydration sidekick that keeps you drinking water, crushing streaks, and making dehydration your mortal enemy",
      link: "dry-af.vercel.app",
      github: "https://github.com/lava-404/DryAF",
      tools: ["React.js", "Mailgun API", "Gemini API", "Node.js", "Express.js", "Bootstrap", "Cron"],
    },
    {
      p_name: "Marvel Magik",
      path: "../assets/mm.mp4", // update with correct path
      info: "About:A chaotic little quiz I built because I clearly had better things to do. Answer a bunch of weird Marvel questions and find out which overly dramatic superhero you're spiritually aligned with.",
      link: "marvel-magik.vercel.app",
      github: "https://github.com/lava-404/Marvel-Magik",
      tools: ["React.js","Gemini API", "Node.js", "Express.js", "Bootstrap"],
    },
    {
      p_name: "DocForge",
      path: "../assets/DocForge.mp4",
      link: "https://doc-forge-ot9l.vercel.app/",
      github: "https://github.com/laoneya/DocForge",
      info: "An AI tool that generates documentation for your code for easier understanding, it can indent, rectify and document your code",
      tools: ["React.js", "Node.js", "Express.js", "Gemini API", "Figma"],
    },
    {
      p_name: "A Bakery Design",
      path: "../assets/ch.mp4",
      link: "",
      github: "https://github.com/lava-404/old_projects",
      info: "A simple website designed a few years back for a bakery to revise my js and html (still proud of the design)",
      tools: ["HTML", "JS", "CSS"],
    },
    {
      p_name: "MintMonk",
      path: "../assets/mim.mp4",
      link: "",
      github: "https://github.com/lava-404/mintmonk-main",
      info: "A tool built for people who love to grind and incentivize productivity (work in progress)",
      tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Rust", "solana/web3.js"],
    },
  ];

  // Render two copies to enable seamless marquee without React key collisions

  return (
    <div className={styles.main} id="work">
      <div className={styles.glassFrame}>
        <div className={styles.track}>
          <div className={styles.cards}>
          {projects.map((card, index) => (
            <div className={styles.card} key={`a-${index}`}>
            <div className={styles.header}>
              <div className={styles.p_name}>{card.p_name}</div>
              <div className={styles.click}>
                <a href={card.link}>Live</a>
                <a href={card.github}>Github</a>
              </div>
            </div>
              <video autoPlay loop muted playsInline className={styles.video}>
              <source src={card.path} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <div className={styles.info}>{card.info}</div>
              <div className={styles.toolsHeader}>Tools Used:</div>
              <div className={styles.tools}>
                {card.tools.map((tool, tIndex) => (
                  <div className={styles.tool} key={tIndex}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
          <div className={styles.cards} aria-hidden="true">
          {projects.map((card, index) => (
            <div className={styles.card} key={`b-${index}`}>
              <div className={styles.header}>
                <div className={styles.p_name}>{card.p_name}</div>
                <div className={styles.click}>
                <a href={card.link}>Live</a>
                <a href={card.github}>Github</a>
                </div>
              </div>
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src={card.path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.info}>{card.info}</div>
              <div className={styles.toolsHeader}>Tools Used:</div>
              <div className={styles.tools}>
                {card.tools.map((tool, tIndex) => (
                  <div className={styles.tool} key={tIndex}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <img className={styles.work} src="/assets/work.png" alt="Work illustration"></img>
    </div>
  );
};

export default Work;
