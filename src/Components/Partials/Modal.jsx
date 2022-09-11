import { useContext, useEffect, useState } from "react";
import { ModalContent } from "../StateManagement/ModalData";
import Style from "../../Assets/scss/Modal.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export const Modal = ({ home_id }) => {
  const { setModalData } = useContext(ModalContent);
  const [homeDetails, setHomeDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/homes/${home_id}`
        );
        setHomeDetails(result.data.item);
      } catch (err) {
        console.error(err);
      }
    };
    getDetails();
  }, [home_id]);

  console.log(homeDetails);

  const close = () => setModalData(false);

  return (
    <div className={Style.wrapper}>
      <p onClick={close} className={Style.cross}>
        X
      </p>
      <div className={Style.sliderWrapper}>
        <Carousel>
          {homeDetails &&
            homeDetails.images.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.filename.large} alt="house" />
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};
