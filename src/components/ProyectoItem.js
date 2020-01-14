import React from 'react'
import { Link } from 'react-router-dom'

class ProyectoItem extends React.Component {
	render() {
		return (
			<Link to={this.props.url} className="proyecto-item noSelect">
				<div className="barra-item">
					<div className="circulo-item circulo-rojo"></div>
					<div className="circulo-item circulo-amarillo"></div>
					<div className="circulo-item circulo-verde"></div>
				</div>
				<div className="contenedor-item">
					<div className="info-item">
						<h1>Gottih</h1>
						<ul>
							<li>• Unit</li>
							<li>• C#</li>
						</ul>
						<p>Móvil</p>
					</div>
					<img src="http://localhost:3000/img/juandagarcia-item.png" alt="" />
				</div>
			</Link>
		)
	}
}

export default ProyectoItem
