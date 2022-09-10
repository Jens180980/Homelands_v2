import { useContext } from 'react'
import Style from '../../Assets/scss/employee.module.scss'
import { EmployeeContent } from '../StateManagement/EmployeeData'

export const EmployeeCard = () => {

    const { EmployeeData } = useContext(EmployeeContent)

    return (
        <>
            <h2>Mød vores ansatte</h2>
            <section className={Style.gallery}>
            {EmployeeData && EmployeeData.map(item => {
                return (

                    <figure key={item.id} className={Style.figure}>
                    <img src={item.image} alt='employee' className={Style.img}></img>
                    <figcaption>
                        <h3>{item.firstname} {item.lastname}</h3>
                        <strong>{item.position}</strong>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                    </figcaption>
                    </figure>
                )
                
                })   
            }
            </section>
        </>
    )
}
