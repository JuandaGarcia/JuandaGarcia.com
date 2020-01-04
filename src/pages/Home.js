import React from 'react'
import Flores from '../img/flores.svg'
import Coder from '../img/juandagarcia.png'

function Home() {
	return (
		<section className="hero">
			<div className="info-hero">
				<div className="soy">
					<h1>
						Hola soy
						<br />
						<strong>Juan David Garcia Rincon</strong>
					</h1>
					<button className="btn-primary">Ver más</button>
				</div>
				<figure className="flores-hero">
					<img src={Flores} alt="flores" />
				</figure>
			</div>
			<figure className="img-hero">
				<img src={Coder} alt="" />
			</figure>
		</section>
	)
}

export default Home
