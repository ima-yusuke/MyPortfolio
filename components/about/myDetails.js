import educations from "./education.json";
import fontawesome from "./fontawesome.json";
import skills from "./skills.json";
import hobbies from "./hobby.json";
import styles from "./about.module.scss";
import "font-awesome/css/font-awesome.min.css";

function MyDetails() {
  return (
    <section className={styles.profileBorder}>
      <article className={styles.article}>
        {/* Using div to make dot on the border  */}
        <div></div>
        
        <aside>
          <h3> Hello! I'm Web Developer </h3>
          <p>
            I am Yusuke from Japan. I would like to help you from Service and
            Concept Design to UX/UI with user perspectives. I realized that the
            world is is full of wonderful people, but it's too difficult to
            always believe it. I would love to make it easy by expressing your
            wonderful vision, and the world might be more colorful and powerful.
          </p>
        </aside>
      </article>

      {/* Displaying icons from fontawesome.json */}
      <article className={styles.article}>
        <div></div>
        <aside>
          <h3>Social Media</h3>
          <aside className={styles.icons}>
            {fontawesome.map((font) => {
              return (
                <a href={font.href} key={font.href}>
                  <i className={font.icon}></i>
                </a>
              )
            })}
          </aside>
        </aside>
      </article>

      {/* Displaying education informations from education.json */}
      <article className={styles.article}>
        <div></div>
        <aside>
          <h3>Education</h3>
          {educations.map((education) => {
            return (
              <article key={education.school} className={styles.education}>
                <h4>[{education.school}]</h4>
                <h4>{education.content}</h4>
                <h4>{education.date}</h4>
              </article>
            );
          })}
        </aside>
      </article>

      {/* Displaying skilld from skills.json */}
      <article className={styles.article}>
        <div></div>
        <aside>
          <h3>Development Skills</h3>
          {skills.map((skill) => {
            return (
              <article className={styles.skills} key={skill.category}>
                <h4>[{skill.category}]</h4>
                <p>{skill.skills}</p>
              </article>
            );
          })}
        </aside>
      </article>

      {/* Displaying hobbies from hobbies.json */}
      <article className={styles.article}>
        <div></div>
        <aside>
          <h3>Hobby</h3>
          <ul>
            {hobbies.map((hobby) => {
              return <li key={hobby.hobby}>{hobby.hobby}</li>;
            })}
          </ul>
        </aside>
      </article>

    </section>
  );
}
export default MyDetails;
