import React from 'react'
import NotFound from './NotFound'
import Loader from '../components/Loader'

class ProjectDetails extends React.Component {
	state = {
		type: this.props.match.params.projectType,
		name_project: this.props.match.params.projectName,
		data: {
			name: '',
			description: '',
			technologies: [],
			img_details: '',
			link: '',
			github_link: '',
			play_store: '',
			app_store: ''
		},
		loading: false,
		error: null
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const response = await fetch(
				`https://my-json-server.typicode.com/JuandaGarcia/db-page/${this.state.type}?id=${this.state.name_project}`
			)
				.then(res => {
					if (res.ok) {
						return res
					} else {
						throw Error(`No se encontro esta pag ${res.status}`)
					}
				})
				.catch(/* console.error */)
			const data = await response.json()
			if (!data.length) {
				this.setState({ error: true })
			}
			this.setState({ loading: false, data: data[0] })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	buttons = (link, css, text) => {
		if (link) {
			return (
				<a
					className="btn-details"
					href={link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{text}
					<div className={`icono-btn-details ${css}`}></div>
				</a>
			)
		}
	}

	render() {
		if (this.state.error) {
			return <NotFound />
		}

		if (this.state.loading) {
			return (
				<div className="project-type">
					<Loader />
				</div>
			)
		}
		return (
			<div className="contenedor-detalles">
				<div className="img-detalles-proyecto">
					<img
						className="noSelect"
						src="https://plantillo.net/uploads/jMtI1bioC0h8jrLomG0I-1523301896.png"
						alt="Imagen-de-proyecto"
					/>
				</div>
				<div className="info-detalles-proyecto">
					<div>
						<h1>{this.state.data.name}</h1>
						<div className="parrafo-detalles">
							<p>{this.state.data.description}</p>
						</div>
						<ul className="lista-detalles">
							{this.state.data.technologies.map(tech => (
								<li key={tech}>• {tech}</li>
							))}
						</ul>
						<div className="botones-detalles">
							{this.buttons(
								this.state.data.github_link,
								'github',
								'Ver en GitHub'
							)}
							{this.buttons(this.state.data.link, 'link', 'Ver sitio')}
							{this.buttons(
								this.state.data.play_store,
								'google-play',
								'Ver en Play Store'
							)}
							{this.buttons(
								this.state.data.app_store,
								'app-store',
								'Ver en App Store'
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectDetails
