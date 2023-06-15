import { Rings } from "react-loader-spinner";
import styles from "./about.module.scss";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import profilePic from "../../public/pic-01.jpg";

function MyName() {
  return (
    <>
      <section className={styles.myNameTop}>
        <article>
          <Rings
            height="400"
            width="400"
            color="rgb(230,230,230)"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </article>
        <Image src={profilePic} alt="Profile" />

        <p>Yusuke Imai</p>
        <p>Frontend Developer</p>
        <h5>Scroll</h5>
        <i class="fa fa-solid fa-chevron-down"></i>
      </section>

      <section className={styles.aboutProfile}>
        <h3>Profile</h3>
      </section>
    </>
  );
}
export default MyName;
