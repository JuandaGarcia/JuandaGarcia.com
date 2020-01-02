import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

function Navbar() {
	return (
		<header>
			<div className="navegacion">
				<Link to="/">
					<figure className="logo">
						<img src={Logo} alt="logo" />
					</figure>
				</Link>
				<nav>
					<ol>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="">Proyectos</Link>
						</li>
						<li>
							<Link to="">CV</Link>
						</li>
						<li>
							<Link to="">Contacto</Link>
						</li>
					</ol>
				</nav>
				<div className="redes">
					<a
						className="icono-social linkedin"
						href="https://www.linkedin.com/in/juandagarciaa/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social github"
						href="https://github.com/JuandaGarcia/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social instagram"
						href="https://www.instagram.com/juandagarciaa/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social youtube"
						href="https://www.youtube.com/channel/UCKDCXohHwtfLDlf2dknPBlw/featured"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
				</div>
			</div>
		</header>
	)
}

export default Navbar
