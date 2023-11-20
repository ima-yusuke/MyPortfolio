import ModalCompo from "./modal";
import workArray from "./work.json";
import styles from "./work.module.scss";
import { useState } from "react";

function Work() {
  let slideIdx = 0;
  const [modalDefaultOpen, setModalDefaultOpen] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);

  

  const handleShow = (e) => {

    // To stop pop up Modal box
    if(e.target.id==0){
      return;
    }

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
        <h1>Works</h1>
        <article>
        {workArray.map((val, idx) => {
          return (
            <figure key={idx}>
              {val.id==0?<a href="https://varinterview.vercel.app/" target="blank"><img src={`./${val.src}`} onClick={handleShow} id={idx}></img></a>:<img src={`./${val.src}`} onClick={handleShow} id={idx}></img>}
              <p key={idx}>{val.title}</p>
            </figure>
          );
        })}
        </article>
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
