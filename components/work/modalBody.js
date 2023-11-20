import styles from "./work.module.scss";

function ModalBodyCompo({ selectedObj }) {
  return (
    <>
      <article>
        <aside className={styles.modalAside}>
          <p>{selectedObj != null ? selectedObj.text : null}</p>
        </aside>

        <aside className={styles.modalAside}>
          <p>
            Main Languages :
            {selectedObj != null
              ? selectedObj.skills.map((val) => {
                  return <span key={val}>{val} /</span>;
                })
              : null}
          </p>
        </aside>

        <aside className={styles.modalAside}>
          <a href="https://github.com/ima-yusuke">
            <i className="fa fa-brands fa-github"></i>
          </a>
          <p>See this code</p>
        </aside>
      </article>
    </>
  );
}
export default ModalBodyCompo;
