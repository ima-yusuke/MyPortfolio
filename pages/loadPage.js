import ParticleLoad from "../components/particle/particleLoad";
import styles from "../components/load/load.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Load(props) {
  console.log(props.page);
  const router = useRouter();
  const page = props.page;

  function goToNextPage() {
    if (page == "/") {
      router.push("/");
    } else if (page == "/aboutPage") {
      router.push("/aboutPage");
    } else if (page == "/workPage") {
      router.push("/workPage");
    } else if (page == "/contactPage") {
      router.push("/contactPage");
    }
  }

  useEffect(() => {
    const interval = setInterval(goToNextPage, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background animation  */}
      <ParticleLoad></ParticleLoad>

      <div id={styles.load}>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </>
  );
}
export default Load;
