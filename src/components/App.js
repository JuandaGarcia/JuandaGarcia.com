import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import Proyectos from '../pages/Proyectos'
import SobreMi from '../pages/SobreMi'
import Contacto from '../pages/Contacto'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/proyectos" component={Proyectos} />
					<Route exact path="/sobre-mi" component={SobreMi} />
					<Route exact path="/contacto" component={Contacto} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
