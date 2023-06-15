import { Button, Modal } from "reactstrap";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import styles from "./work.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBodyCompo from "./modalBody";

function ModalCompo({ selectedObj, modalDefaultOpen, setModalDefaultOpen }) {
  let slideIdx = 0;

  function imgUrl() {
    if (selectedObj != null) {
      switch (slideIdx) {
        case 0:
          slideIdx++;
          return selectedObj["gallry"][0];
        case 1:
          slideIdx++;
          return selectedObj["gallry"][1];
        case 2:
          slideIdx++;
          return selectedObj["gallry"][2];
        default:
          break;
      }
    } else {
      return "pic-01.jpg";
    }
  }

  function createSlide() {
    return (
      <SwiperSlide className={styles.slide}>
        <img className="slideImg" src={`./${imgUrl()}`} />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Modal
        isOpen={modalDefaultOpen}
        toggle={() => setModalDefaultOpen(false)}
        centered
        size="lg"
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-default">
            <p className={styles.modalTitle}>{selectedObj != null ? selectedObj.title : null}</p>
          </h6>
        </div>

        <div className={styles.modalBody}>
          <ModalBodyCompo selectedObj={selectedObj}></ModalBodyCompo>

          <article className={styles.modalpicture}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              <div className={styles.test}>
                {createSlide()}
                {createSlide()}
                {createSlide()}
              </div>
            </Swiper>
          </article>
        </div>

        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="link"
            onClick={() => setModalDefaultOpen(false)}
            type="button"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalCompo;
