import MyDetails from "../components/about/myDetails";
import MyName from "../components/about/myName";
import styles from "../components/about/about.module.scss";

function AboutPage() {
  return (
    <div className={styles.aboutParent}>
      <MyName></MyName>
      <MyDetails></MyDetails>
    </div>
  );
}
export default AboutPage;
