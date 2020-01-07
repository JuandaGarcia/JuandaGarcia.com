import React from 'react'
import imagen from '../img/proyectos.png'

function ProyectosSection() {
	return (
		<div className="ProyectosSection">
			<div className="img-proyectos">
				<img src={imagen} alt="Proyectos" />
			</div>
			<div className="movile-web-proyects">
				<div className="card-proyecto card-1"></div>
				<div className="card-proyecto card-2"></div>
			</div>
		</div>
	)
}

export default ProyectosSection
