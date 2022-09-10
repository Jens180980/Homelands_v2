import { useContext } from "react"
import { ModalContent } from "../StateManagement/ModalData"
import Style from '../../Assets/scss/Modal.module.scss'


export const Modal = () => {
  
  const { ModalData, setModalData } = useContext(ModalContent)

  const close = () => setModalData(false)

  console.log(ModalData)

  return (
    <div className={Style.wrapper}>
      <p onClick={close}>X</p>
    </div>
  )
}
