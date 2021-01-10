import React from 'react'
import NotFound from './NotFound'
import Loader from '../components/Loader'
import { projects } from '../data/projects'
import ProjectButtons from '../components/ProjectButtons'

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
			app_store: '',
		},
		loading: false,
		error: null,
	}

	componentDidMount() {
		this.filterProject()
	}

	filterProject = () => {
		this.setState({ loading: true, error: null })
		try {
			const filter = Object.keys(projects)
				.filter((key) => this.state.type === key)
				.reduce((obj, key) => {
					obj[key] = projects[key]
					return obj
				}, {})

			const data = filter[Object.keys(filter)[0]]

			const projectDetails = data.filter(
				(type) => type.id === this.state.name_project
			)

			if (!projectDetails.length) {
				throw Error('404')
			}

			this.setState({ loading: false, data: projectDetails[0] })
		} catch (error) {
			this.setState({ loading: false, error: error })
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
			<main className="section-page">
				<div className="contenedor-detalles">
					<div className="img-detalles-proyecto">
						<img
							className="noSelect"
							src={this.state.data.img_details}
							alt={`${this.state.data.name} img`}
						/>
					</div>
					<div className="info-detalles-proyecto">
						<div>
							<h1>{this.state.data.name}</h1>
							<div className="parrafo-detalles">
								<p>{this.state.data.description}</p>
							</div>
							<ul className="lista-detalles">
								{this.state.data.technologies.map((tech) => (
									<li key={tech}>• {tech}</li>
								))}
							</ul>
							<div className="botones-detalles">
								<ProjectButtons
									link={this.state.data.github_link}
									css={'github'}
									text={'Ver en GitHub'}
								/>
								<ProjectButtons
									link={this.state.data.play_store}
									css={'google-play'}
									text={'Play Store'}
								/>
								<ProjectButtons
									link={this.state.data.app_store}
									css={'app-store'}
									text={'App Store'}
								/>
								<ProjectButtons
									link={this.state.data.link}
									css={'link'}
									text={'Ver sitio'}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default ProjectDetails
