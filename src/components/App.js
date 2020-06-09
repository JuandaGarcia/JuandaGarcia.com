import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import Proyectos from '../pages/Proyectos'
import ProjectType from '../pages/ProjectType'
import SobreMi from '../pages/SobreMi'
import Contacto from '../pages/Contacto'
import NotFound from '../pages/NotFound'
import ProjectDetails from '../pages/ProjectDetails'
import Hosting from '../pages/Hosting'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/proyectos" component={Proyectos} />
					<Route exact path="/proyectos/:projectType" component={ProjectType} />
					<Route
						exact
						path="/proyectos/:projectType/:projectName"
						component={ProjectDetails}
					/>
					<Route exact path="/sobre-mi" component={SobreMi} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/hosting" component={Hosting} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
