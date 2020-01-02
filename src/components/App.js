import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact patch="/" component={Home} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
