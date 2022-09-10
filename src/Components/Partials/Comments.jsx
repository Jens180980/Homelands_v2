import Style from '../../Assets/scss/Comments.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { authHeader } from '../StateManagement/Authorize'
import { useNavigate } from 'react-router-dom'

export const Comments = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [trueFalse, setTrueFalse] = useState(false)
  const navigate = useNavigate()

  const hideShow = () => {
    if(trueFalse) {
      setTrueFalse(false)
    } else {
      setTrueFalse(true)
    }
  }

  const sendComment = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('user_id', data.user_id);
    formData.append('num_stars', data.num_stars);
    formData.append('active', 1);
    setTrueFalse(false)

    try {
      const result = await axios.post('https://api.mediehuset.net/homelands/reviews', formData, { headers: authHeader()})
      console.log(result);
      <p>Din kommentar er modtaget</p>
    }
		catch {
      console.error(errors)
      navigate("/login", { replace: true})
    }
  }

  return (
    <section className={Style.comments}>
      <div>
        <h3>Det siger kunderne:</h3>
        <div className={Style.existing}>
          <h4>Fandt drømmehuset</h4>
          <p>“HomeLands hjalp os med at finde vores drømmehus i 2018. Efter at vi havde prøvet to andre mæglere lykkedes det dem at sælge vores gamle hus på under tre måneder. Både service og pris var helt i top</p>
          <p className={Style.title}>Anna Hattevej, August 2019</p>
        </div>
        <button className={Style.click} onClick={hideShow}>Skriv en anmeldelse</button>
      </div>
      {trueFalse ?
          (
            <div className={Style.form}>
              <form onSubmit={handleSubmit(sendComment)}>
                <div>
                  <input type="text" id="title" placeholder="Indtast kommentarens titel" 
                    {...register("title", { required: true })} />
                
                  {errors.title && (
                    <span>Udfyld venligst feltet korrekt</span>
                  )}
                </div>
                <div>
                  <input type="text" id="content" placeholder="Indtast din kommentar" 
                    {...register("content", { required: true })} />
                  
                  {errors.content && (
                    <span>Udfyld venligst feltet korrekt</span>
                  )}
                </div>
                <div>
                  <button>Send kommentar</button>
                </div>
			        </form>
            </div>
          ) : null
      } 
    </section>
  )
}
