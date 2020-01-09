import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

class Navbar extends React.Component {
	state = {
		ActiveClassName: ''
	}

	toggleMenu() {
		if (this.state.ActiveClassName === 'is-active') {
			this.setState({
				ActiveClassName: ''
			})
		} else {
			this.setState({
				ActiveClassName: 'is-active'
			})
		}
	}

	handleClick = e => {
		this.toggleMenu()
	}

	render() {
		return (
			<header>
				<Link className="noSelect" to="/">
					<figure className="logo">
						<img src={Logo} alt="logo" />
					</figure>
				</Link>
				<button
					onClick={this.handleClick}
					className={`noSelect burger-button ${this.state.ActiveClassName}`}
					id="burger-menu"
				></button>
				<nav className={`menu ${this.state.ActiveClassName}`}>
					<ol>
						<li>
							<Link
								className="noSelect link-navbar"
								onClick={this.handleClick}
								id="Home"
								to="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="noSelect link-navbar"
								onClick={this.handleClick}
								id="Sobre"
								to="/sobre-mi"
							>
								Sobre mí
							</Link>
						</li>
						<li>
							<Link
								className="noSelect link-navbar"
								onClick={this.handleClick}
								id="Proyectos"
								to="/proyectos"
							>
								Proyectos
							</Link>
						</li>
						<li>
							<Link
								className="noSelect link-navbar"
								onClick={this.handleClick}
								id="Contacto"
								to="/contacto"
							>
								Contacto
							</Link>
						</li>
					</ol>
				</nav>
				<div className="redes">
					<a
						className="icono-social linkedin noSelect"
						href="https://www.linkedin.com/in/juandagarciaa/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social github noSelect"
						href="https://github.com/JuandaGarcia/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social instagram noSelect"
						href="https://www.instagram.com/juandagarciaa/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
					<a
						className="icono-social youtube noSelect"
						href="https://www.youtube.com/channel/UCKDCXohHwtfLDlf2dknPBlw/featured"
						target="_blank"
						rel="noopener noreferrer"
					>
						{}
					</a>
				</div>
			</header>
		)
	}
}

export default Navbar
