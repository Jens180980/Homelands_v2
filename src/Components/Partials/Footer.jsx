import Style from '../../Assets/scss/Footer.module.scss'
import twitter from '../../Assets/img/twitter.png'
import facebook from '../../Assets/img/facebook.png'

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.wrapper}>
        <section className={Style.left}>
          <h2>Homelands</h2>
          <div><p>Øster Uttrupvej 5</p><p>9000 Aalborg</p></div>
          <div><a href="mailto:info@homelands.dk">Email: info@homelands.dk</a><a href="tel:4511223344">Telefon: +45 11223344</a></div>
        </section>
        <section className={Style.right}>
          <a href="https://www.twitter.com"><img src={twitter} alt="twitter"></img></a>
          <a href="https://www.facebook.com"><img src={facebook} alt="facebook"></img></a>
        </section>
      </div>
    </footer>
  )
}
