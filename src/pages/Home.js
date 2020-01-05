import React from 'react'
import Flores from '../img/flores.svg'
import Coder from '../img/juandagarcia.png'
import ContactForm from '../components/ContactForm'
import ProyectosSection from '../components/ProyectosSection'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<React.Fragment>
			<section className="hero">
				<div className="info-hero">
					<div className="soy">
						<h1>
							Hola soy
							<br />
							<strong>Juan David Garcia Rincon</strong>
						</h1>
						<p>
							Frontend Developer con gran pasión por el diseño y el desarrollo
							web
						</p>
						<Link to="/sobre-mi" className="cur">
							<button className="btn-primary">Ver más</button>
						</Link>
					</div>
					<figure className="flores-hero">
						<img src={Flores} alt="flores" />
					</figure>
				</div>
				<figure className="img-hero">
					<img src={Coder} alt="" />
				</figure>
			</section>
			<ProyectosSection />
			<ContactForm />
		</React.Fragment>
	)
}

export default Home
