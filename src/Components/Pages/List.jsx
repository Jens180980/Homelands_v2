import { useContext } from "react"
import { HouseCard } from "../Partials/HouseCard"
import { listContent } from "../StateManagement/ListData"
import Style from '../../Assets/scss/List.module.scss'


export const List = () => {

  const list = useContext(listContent)


  return (
    <section className={Style.compWrapper}>
      <section className={Style.top}>
        <h2>Boliger til salg</h2>
        <div>
          <p>slider</p>
          <p>sorter</p>
        </div>
      </section>
      

      <section className={Style.gallery}>
        {list.listData && list.listData.map(item => {
          return(
            < HouseCard key={item.id} id={item.id} img={item.images[0].filename.medium} address={item.address} zip={item.zipcode} city={item.city} type={item.type} energy={item.energy_label_name} rooms={item.num_rooms} area={item.floor_space} price={item.price} />
          )
        }
        )}
      </section>
    </section>
  )
}
