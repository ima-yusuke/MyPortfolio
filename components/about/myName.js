import { Rings } from "react-loader-spinner";
import styles from "./about.module.scss";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import profilePic from "../../public/pic-01.jpg";
import { useState } from "react";

function MyName() {
  const TIMEOUT = 1500;

  const [addClass, setAddClass] = useState(false);

  setInterval(() => {
    setAddClass(true);
    setTimeout(() => {
      setAddClass(false);
    }, TIMEOUT);
  }, TIMEOUT * 2);
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
        <h5 className={addClass ? `${styles.title} ${styles.visible}` :styles.title}>
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
        </h5>
        <i class="fa fa-solid fa-chevron-down"></i>
      </section>

      <section className={styles.aboutProfile}>
        <h3>Profile</h3>
      </section>
    </>
  );
}
export default MyName;
