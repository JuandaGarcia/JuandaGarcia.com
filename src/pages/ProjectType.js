import React from 'react'
import ProyectoItem from '../components/ProyectoItem'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

class ProjectType extends React.Component {
	state = {
		type: this.props.match.params.projectType,
		data: [],
		title: '',
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
			const title = data[0].type

			this.setState({ loading: false, data: data, title: title })
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
				<h1 className="project-type-title">{this.state.title}</h1>
				{this.state.data.map(project => {
					return (
						<div key={project.id}>
							<Link to={`/proyectos/${this.state.type}/${project.id}`}>
								<ProyectoItem projects={project} type={project.type} />
							</Link>
						</div>
					)
				})}
			</div>
		)
	}
}

export default ProjectType
