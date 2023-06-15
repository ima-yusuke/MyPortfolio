import AboutPage from "./aboutPage";
import styles from "../components/contact/contact.module.scss";
import fontawesome from "../components/about/fontawesome.json";
function ContactPage() {
  return (
    <div className={styles.contactParent}>
      {/* Displaying fontawesome icons with button */}
      <aside className={styles.contactIcon}>
        {fontawesome.map((font) => {
          return (
            <a href={font.href} key={font.href}>
              <i className={font.icon}></i>
              {font.iconName}
            </a>
          );
        })}
      </aside>

      <AboutPage></AboutPage>
    </div>
  );
}
export default ContactPage;
