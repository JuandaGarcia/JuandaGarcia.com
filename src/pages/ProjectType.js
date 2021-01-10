import React from 'react'
import ProyectoItem from '../components/ProyectoItem'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import { projects } from '../data/projects'

class ProjectType extends React.Component {
	state = {
		type: this.props.match.params.projectType,
		data: [],
		title: '',
		loading: false,
		error: null,
		textoBusqueda: '',
		searchResult: [],
		button_search: '',
	}

	componentDidMount() {
		this.filterProjects()
	}

	filterProjects = () => {
		this.setState({ loading: true, error: null })
		try {
			const filter = Object.keys(projects)
				.filter((key) => this.state.type === key)
				.reduce((obj, key) => {
					obj[key] = projects[key]
					return obj
				}, {})

			const data = filter[Object.keys(filter)[0]]
			const title = data[0].type

			this.setState({ loading: false, data: data, title: title })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleChange = (e) => {
		const texto = e.target.value
		this.setState({
			textoBusqueda: texto,
			button_search: 'cancel-search-search',
		})
		const search = this.state.data.filter((project) => {
			return `${project.name} ${
				project.description
			} ${project.technologies.reduce((a, b) => `${a} ${b}`)}`
				.toLowerCase()
				.includes(texto.toLowerCase())
		})

		this.setState({ searchResult: search })
	}

	handleClink = (e) => {
		this.setState({ textoBusqueda: '' })
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

		if (!this.state.textoBusqueda) {
			return (
				<div className="project-type">
					<h1 className="project-type-title">{this.state.title}</h1>
					<form className="search">
						<input
							placeholder="Buscar proyectos..."
							type="text"
							maxLength="50"
							onChange={this.handleChange}
						/>
						<button
							className="search-search noSelect"
							type="reset"
							onClick={this.handleClink}
						></button>
					</form>
					<div className="projects-list noScrollBar">
						{this.state.data.map((project) => {
							return (
								<div key={project.id}>
									<Link
										className="noSelect"
										to={`/proyectos/${this.state.type}/${project.id}`}
									>
										<ProyectoItem
											imgClase={this.state.type}
											projects={project}
											type={project.type}
										/>
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			)
		}

		if (!this.state.searchResult.length) {
			return (
				<div className="project-type">
					<h1 className="project-type-title">{this.state.title}</h1>
					<form className="search">
						<input
							placeholder="Buscar proyectos..."
							type="text"
							onChange={this.handleChange}
						/>
						<button
							className={`search-search ${this.state.button_search} noSelect`}
							type="reset"
							onClick={this.handleClink}
						></button>
					</form>
					<div className="projects-list noScrollBar">
						<h3>
							No hay resultados para "{this.state.textoBusqueda}". Intenta otra
							cosa :)
						</h3>
					</div>
				</div>
			)
		}

		return (
			<div className="project-type">
				<h1 className="project-type-title">{this.state.title}</h1>
				<form className="search">
					<input
						placeholder="Buscar proyectos..."
						type="text"
						onChange={this.handleChange}
					/>
					<button
						className={`search-search ${this.state.button_search} noSelect`}
						type="reset"
						onClick={this.handleClink}
					></button>
				</form>
				<div className="projects-list noScrollBar">
					{this.state.searchResult.map((project) => {
						return (
							<div key={project.id}>
								<Link
									className="noSelect"
									to={`/proyectos/${this.state.type}/${project.id}`}
								>
									<ProyectoItem
										imgClase={this.state.type}
										projects={project}
										type={project.type}
									/>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default ProjectType
