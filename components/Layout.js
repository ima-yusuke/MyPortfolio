import Footer from "@/components/footer/footer";
import NavCompo from "@/components/nav/nav";
import { useRouter } from "next/router";
function Layout({ children, page, setPage }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      {/* if current page is nav page or load one, NavCompo and Footer won't be displayed */}
      {currentPath == "/navPage" || currentPath == "/loadPage" ? (
        <div>{children}</div>
      ) : (
        <div>
          <NavCompo page={page} setPage={setPage}></NavCompo>
          <div>{children}</div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}
export default Layout;
