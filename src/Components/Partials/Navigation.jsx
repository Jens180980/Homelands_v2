import { NavLink } from "react-router-dom"
import Style from '../../Assets/scss/Navigation.module.scss'

export const Navigation = () => {
	return (
		<nav className={Style.nav}>
			<ul>
				<li><NavLink to="/" >Forside</NavLink></li>
				<li><NavLink to="/list">Boliger til salg</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
			</ul>
		</nav>
	)
}