import Style from '../../Assets/scss/HouseCard.module.scss'
import { Link } from 'react-router-dom'
import { authHeader } from '../StateManagement/Authorize'
import axios from 'axios'

export const HouseCard = ({id, img, address, zip, city, type, energy, rooms, area, price }) => {

  const house_id = id

  const updateClicks = async () => {
    const result = await axios.patch(`https://api.mediehuset.net/homelands/homes/${house_id}`, { headers: authHeader() })
  }

  return (
    <Link to={"/list/" + id} onClick={updateClicks}>
      <figure className={Style.figure}>
        <img src={img} alt='house' className={Style.img}></img>
        <h3>{address}</h3>
        <strong>{zip} {city}</strong>
        <p>{type}</p>
        <div className={Style.bottom}>
          <div><span className={Style.energy}>{energy}</span><span>{rooms} værelser, {area}m2</span></div>
          <strong>{price} DKK</strong>
        </div>
      </figure>
    </Link>
  )
}
