import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Style from "../../Assets/scss/Details.module.scss";
import camera from "../../Assets/img/camera.png";
import geo from "../../Assets/img/geo.png";
import heart from "../../Assets/img/heart.png";
import plan from "../../Assets/img/plan.png";
import employee from "../../Assets/img/employee.png";
import { useContext } from "react";
import { ModalContent } from "../StateManagement/ModalData";
import { Modal } from "../Partials/Modal";

export const Details = () => {
  const { home_id } = useParams(0);
  const [homeDetails, setHomeDetails] = useState();
  const { ModalData, setModalData } = useContext(ModalContent);

  const open = (component) => {
    setModalData(true);
  };

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

  return (
    <>
      <section className={Style.wrapper}>
        {homeDetails ? (
          <>
            <div className={Style.imgWrapper}>
              <img
                src={homeDetails.images[0].filename.large}
                alt="house"
                className={Style.hero}
              ></img>
            </div>
            <div className={Style.textWrapper}>
              <section className={Style.top}>
                <div className={Style.topleft}>
                  <h3>{homeDetails.address}</h3>
                  <p>{homeDetails.zipcode + " " + homeDetails.city}</p>
                  <p>
                    {homeDetails.type +
                      " |" +
                      homeDetails.floor_space +
                      "m2 |" +
                      homeDetails.num_rooms +
                      " værelser"}
                  </p>
                  <p>Set {homeDetails.num_clicks} gange</p>
                </div>
                <div className={Style.topmiddle}>
                  <img src={camera} onClick={open} alt="camera" />
                  <img src={plan} alt="plantegning" />
                  <img src={geo} alt="geolokation" />
                  <img src={heart} alt="like" />
                </div>
                <div className={Style.topright}>
                  <p className={Style.priceTxt}>
                    Kontantpris <span>{homeDetails.price} DKK</span>
                  </p>
                  <p className={Style.downpay}>
                    Udbetaling {homeDetails.payout} DKK
                  </p>
                  <p>Ejerudgift per måned {homeDetails.cost} DKK</p>
                </div>
              </section>
              <section className={Style.bottom}>
                <article>
                  <p>{homeDetails.description}</p>
                </article>
                <figure>
                  <h3>Kontakt</h3>
                  <img src={employee} alt="ansat"></img>
                  <figcaption>
                    <h4>Verner Flemming Kristensen</h4>
                    <p>Partner, salg og vurdering</p>
                    <p>Mobil: 55443322</p>
                    <p>Email: vefk@homelands.dk</p>
                  </figcaption>
                </figure>
              </section>
            </div>
          </>
        ) : null}
      </section>
      {ModalData ? <Modal home_id={home_id} /> : null}
    </>
  );
};
