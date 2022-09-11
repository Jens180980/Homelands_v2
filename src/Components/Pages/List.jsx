import { useContext } from "react";
import { HouseCard } from "../Partials/HouseCard";
import { listContent } from "../StateManagement/ListData";
import Style from "../../Assets/scss/List.module.scss";
import { RangeSlider } from "../Partials/RangeSlider";
// import { PriceRangeContent } from "../StateManagement/PriceRangeData";

export const List = () => {
  const list = useContext(listContent);
  // const { PriceRangeData } = useContext(PriceRangeContent);

  return (
    <section className={Style.compWrapper}>
      <section className={Style.top}>
        <h2>Boliger til salg</h2>
        <div className={Style.rangeslider}>
          <p>Sorter efter pris</p>
          <RangeSlider />
        </div>
      </section>

      <section className={Style.gallery}>
        {list.listData &&
          list.listData.map((item) => {
            // if item.price < PriceRangeData[1] && item.price > PriceRangeData[0]
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
      </section>
    </section>
  );
};
