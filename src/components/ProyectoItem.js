import React from 'react'

function ProyectoItem(props) {
	const project = props.projects
	return (
		<div className="proyecto-item noSelect">
			<div className="barra-item">
				<div className="circulo-item circulo-rojo"></div>
				<div className="circulo-item circulo-amarillo"></div>
				<div className="circulo-item circulo-verde"></div>
			</div>
			<div className="contenedor-item">
				<div className="info-item">
					<h1>{project.name}</h1>
					<ul>
						{project.technologies.map(technologies => {
							return <li key={technologies}>{`• ${technologies}`}</li>
						})}
					</ul>
				</div>
				<img
					className={`item-img-${props.imgClase}`}
					src={project.img}
					alt={`${project.name} img`}
				/>
			</div>
		</div>
	)
}

export default ProyectoItem
