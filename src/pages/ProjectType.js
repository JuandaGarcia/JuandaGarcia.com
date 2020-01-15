import React from 'react'
import ProyectoItem from '../components/ProyectoItem'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

class ProjectType extends React.Component {
	state = {
		type: this.props.match.params.projectType,
		data: {
			name: '',
			projects: []
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
				`https://my-json-server.typicode.com/JuandaGarcia/db-page/${this.state.type}`
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

			this.setState({ loading: false, data: data })
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
			<div className="project-type">
				<h1 className="project-type-title">{this.state.data.name}</h1>
				<ul>
					{this.state.data.projects.map(project => {
						return (
							<li key={project.id}>
								<Link to={`/proyectos/${this.state.type}/${project.id}`}>
									<ProyectoItem
										projects={project}
										type={this.state.data.name}
									/>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default ProjectType
