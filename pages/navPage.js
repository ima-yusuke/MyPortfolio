import ParticleNav from "../components/particle/particleNav";
import { useRouter } from "next/router";
import styles from "../components/nav/nav.module.scss";
import "font-awesome/css/font-awesome.min.css";
function NavPage(props) {
  const router = useRouter();
  const page = props.page;
  const setPage = props.setPage;

  const backPreviousPage = () => {
    if (page == "/") {
      router.push("/");
    } else if (page == "/aboutPage") {
      router.push("/aboutPage");
    } else if (page == "/workPage") {
      router.push("/workPage");
    } else if (page == "/contactPage") {
      router.push("/contactPage");
    }
  };

  function goToLoadPage(e) {
    console.log(e.target.innerText);
    if (e.target.innerText == "Home") {
      setPage("/");
    } else if (e.target.innerText == "About") {
      setPage("/aboutPage");
    } else if (e.target.innerText == "Work") {
      setPage("/workPage");
    } else if (e.target.innerText == "Contact") {
      setPage("/contactPage");
    }
    router.push("/loadPage");
  }

  return (
    <>
     {/* Background animation  */}
      <ParticleNav></ParticleNav>

      <section className={styles.navpage}>
        <nav className={styles.navmenu}>
          <ul>
            <li>
              <p onClick={goToLoadPage}>Home</p>
            </li>
            <li>
              <p onClick={goToLoadPage}>About</p>
            </li>
            <li>
              <p onClick={goToLoadPage}>Work</p>
            </li>
            <li>
              <p onClick={goToLoadPage}>Contact</p>
            </li>
          </ul>
        </nav>
        <button onClick={backPreviousPage}>X</button>
      </section>
    </>
  );
}
export default NavPage;
