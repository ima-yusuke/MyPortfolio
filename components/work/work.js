import ModalCompo from "./modal";
import workArray from "./work.json";
import styles from "./work.module.scss";
import { useState } from "react";

function Work() {
  let slideIdx = 0;
  const [modalDefaultOpen, setModalDefaultOpen] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);

  const handleShow = (e) => {
    slideIdx = 0;
    setModalDefaultOpen(true);
    let idx = e.target.id;
    workArray.forEach((val, key) => {
      if (key == idx) {
        setSelectedObj(val);
      }
    });
  };

  return (
    <>
      <section className={styles.work}>
        {workArray.map((val, idx) => {
          return (
            <figure key={idx}>
              <img src={`./${val.src}`} onClick={handleShow} id={idx}></img>
              <p key={idx}>{val.title}</p>
            </figure>
          );
        })}
      </section>

      <ModalCompo
        selectedObj={selectedObj}
        modalDefaultOpen={modalDefaultOpen}
        setModalDefaultOpen={setModalDefaultOpen}
       
      ></ModalCompo>
    </>
  );
}
export default Work;
