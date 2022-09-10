import { useContext } from "react";
import vejle from "../../Assets/img/vejle.png";
import { Comments } from "../Partials/Comments";
import Style from "../../Assets/scss/Home.module.scss";
import { CommentWrapper } from "../StateManagement/CommentData";
import { EmployeeWrapper } from "../StateManagement/EmployeeData";
import { EmployeeCard } from "../Partials/EmployeeCard";
import { HouseCard } from "../Partials/HouseCard";
import { listContent } from "../StateManagement/ListData";

export const Home = () => {
  const { listData } = useContext(listContent);

  return (
    <section className={Style.home}>
      <div className={Style.imgWrapper}>
        <img src={vejle} alt="hero" className={Style.hero}></img>
      </div>
      <div className={Style.textWrapper}>
        <div className={Style.gallery}>
          {listData &&
            listData.slice(0, 3).map((item) => {
              return (
                <HouseCard
                  key={item.id}
                  id={item.id}
                  img={item.images[0].filename.medium}
                  address={item.address}
                  zip={item.zipcode}
                  city={item.city}
                  type={item.type}
                  energy={item.energy_label_name}
                  rooms={item.num_rooms}
                  area={item.floor_space}
                  price={item.price}
                />
              );
            })}
        </div>
        <CommentWrapper>
          <Comments />
        </CommentWrapper>
        <EmployeeWrapper>
          <EmployeeCard />
        </EmployeeWrapper>
      </div>
    </section>
  );
};
