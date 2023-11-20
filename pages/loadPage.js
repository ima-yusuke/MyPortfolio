import ParticleLoad from "../components/particle/particleLoad";
import styles from "../components/load/load.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setConfig } from "next/config";

function Load(props) {
  const router = useRouter();
  const page = props.page;

  // Go to following page
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

  // After 2 seconds, goToNextPage function will be executed and go to next page
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
