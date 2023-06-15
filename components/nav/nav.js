import "font-awesome/css/font-awesome.min.css";
import styles from "./nav.module.scss";
import { useRouter } from "next/router";

function NavCompo(props) {
  const router = useRouter();
  const currentPath = router.pathname;
  const setPage = props.setPage;

  function MoveToNav() {
    // Gettimg pathname and saving to "page"(useState)
    setPage(router.pathname);
    router.push("/navPage");
  }

  return (
    <>
      <section
        // Icon color changes by page
        className={`${currentPath == "/" ? styles.navBarWhite : styles.navBar}`}
      >
        <i className="fa fa-solid fa-bars" onClick={MoveToNav}></i>
      </section>
    </>
  );
}
export default NavCompo;
