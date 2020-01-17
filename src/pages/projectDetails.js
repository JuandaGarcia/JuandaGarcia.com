import React from 'react'

class ProjectDetails extends React.Component {
	render() {
		return (
			<div className="contenedor-detalles">
				<div className="img-detalles-proyecto">
					<img
						className="noSelect"
						src="https://static.platzi.com/media/landing-projects/Proyecto-redux.gif"
						alt="Imagen-de-proyecto"
					/>
				</div>
				<div className="info-detalles-proyecto">
					<div>
						<h1>JuandaGarcia.com</h1>
						<div className="parrafo-detalles">
							<p>
								it is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like readable English.
							</p>
						</div>
						<ul className="lista-detalles">
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
							<li>• React</li>
						</ul>
						<div className="botones-detalles">
							<a
								className="btn-details"
								href="https://"
								target="_blank"
								rel="noopener noreferrer"
							>
								Ver en Github
								<div className="icono-btn-details github"></div>
							</a>
							<a
								className="btn-details"
								href="https://"
								target="_blank"
								rel="noopener noreferrer"
							>
								Ver en Github
								<div className="icono-btn-details app-store"></div>
							</a>
							<a
								className="btn-details"
								href="https://"
								target="_blank"
								rel="noopener noreferrer"
							>
								Ver en Github
								<div className="icono-btn-details github"></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectDetails
