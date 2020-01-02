import React from 'react'
import Flores from '../img/flores.png'

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
					<button>Ver más</button>
				</div>
				<figure className="flores-hero">
					<img src={Flores} alt="flores" />
				</figure>
			</div>
			<div className="img-hero"></div>
		</section>
	)
}

export default Home
